import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useGetSnippetsQuery } from '../api/snippets.api';
import { selectSnippetCardProps } from '../api/snippets.selector';

import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';

export const useSnippets = (userId?: string) => {
  const queryArgs = userId ? { userId } : undefined;
  const isMySnippets = !!userId;

  const { isLoading, isError, refetch } = useGetSnippetsQuery(queryArgs);

  const navigate = useNavigate();

  const snippets = useSelector(selectSnippetCardProps(isMySnippets));

  const { handleMark } = useSnippetMark();

  const handleLike = useCallback(
    (id: string, currentType: MarkType, nextType: 'like' | 'dislike') => () => {
      handleMark(id, currentType, nextType);
    },
    [handleMark],
  );

  const handleComment = useCallback(
    (id: string) => () => {
      navigate(`${RoutesPaths.SNIPPET}/${id}`);
    },
    [navigate],
  );

  return {
    handleLike,
    handleComment,
    snippets,
    isLoading,
    isError,
    refetch,
  };
};
