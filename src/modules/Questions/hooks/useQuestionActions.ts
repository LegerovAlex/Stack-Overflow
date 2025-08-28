import { useCallback } from 'react';
import { useDeleteQuestionMutation } from '../api/questions.api';

import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import type { QuestionFormValue } from '@/interfaces/api.interfaces';

export const useQuestionsActions = () => {
  const [deleteQuestion] = useDeleteQuestionMutation();
  const navigate = useNavigate();

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteQuestion(id).unwrap();
    },
    [deleteQuestion],
  );

  const handleEdit = useCallback(
    (id: string, data: QuestionFormValue) => {
      navigate(`${RoutesPaths.QUESTION_CREATE}/${id}`, { state: { initialValues: data } });
    },
    [navigate],
  );

  return {
    handleDelete,
    handleEdit,
  };
};
