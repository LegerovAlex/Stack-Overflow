import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useGetSnippetsQuery } from '../api/snippets.api';
import { selectSnippetCardProps } from '../api/snippets.selector';

import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';
import { useInfiniteScrollLocal } from '@/hooks/useInfiniteScroll';
import { useAuth } from '@/hooks/useAuth';

export const useSnippets = (userId?: string | null) => {
  const { pageNum, lastElementRef } = useInfiniteScrollLocal(false);

  const queryArgs = typeof userId === 'string' ? { userId } : { page: pageNum, limit: 5 };

  const isMySnippets = typeof userId === 'string';

  const skip = userId === null;

  const { isLoading, isError, refetch, isFetching } = useGetSnippetsQuery(queryArgs, { skip });

  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const snippets = useSelector(selectSnippetCardProps(isMySnippets));

  const { handleMark } = useSnippetMark();

  const handleLike = useCallback(
    (id: string, currentType: MarkType, nextType: 'like' | 'dislike') => {
      handleMark(id, currentType, nextType);
    },
    [handleMark],
  );

  const handleComment = useCallback(
    (id: string) => {
      navigate(`${RoutesPaths.SNIPPET}/${id}`);
    },
    [navigate],
  );
  return {
    handleLike,
    handleComment,
    snippets,
    isLoading,
    lastElementRef,
    isFetching,
    isAuthenticated,
    isError,
    refetch,
  };
};
