import { useCallback } from 'react';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useNavigate } from 'react-router';
import { useDeleteSnippetMutation } from '../api/snippets.api';

export const useSnippetActions = () => {
  const { handleMark } = useSnippetMark();

  const [deleteSnippet] = useDeleteSnippetMutation();
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

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteSnippet(id).unwrap();
    },
    [deleteSnippet],
  );

  return { handleLike, handleComment, handleDelete };
};
