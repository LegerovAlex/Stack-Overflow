import { useCallback } from 'react';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';

export const useSnippetLike = () => {
  const { handleMark } = useSnippetMark();

  const handleLike = useCallback(
    (id: string, currentType: MarkType, nextType: 'like' | 'dislike') => {
      handleMark(id, currentType, nextType);
    },
    [handleMark],
  );

  return { handleLike };
};
