import { useCallback } from 'react';
import { useSnippetMark } from './useSnippetMark';
import type { MarkType } from '@/types/snippets.types';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useNavigate } from 'react-router';
import { useDeleteSnippetMutation } from '../api/snippets.api';
import type { SnippetFormValue } from '@/interfaces/api.interfaces';

export const useSnippetActions = () => {
  const { handleMark } = useSnippetMark();

  const [deleteSnippet] = useDeleteSnippetMutation();
  const navigate = useNavigate();

  const handleMarkAction = useCallback(
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

  const hadleEdit = useCallback(
    (id: string, data: SnippetFormValue) => {
      navigate(`${RoutesPaths.POSTS}/${id}`, { state: { initialValues: data } });
    },
    [navigate],
  );

  return { handleMarkAction, handleComment, handleDelete, hadleEdit };
};
