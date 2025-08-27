import { useCallback } from 'react';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useNavigate } from 'react-router';

export const useSnippetActions = () => {
  const { handleMark } = useSnippetMark();
  const navigate = useNavigate();

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

  return { handleLike, handleComment };
};
