import { useAuth } from '@/hooks/useAuth';
import { useAddQuestionMutation, useUpdateQuestionMutation } from '../api/questions.api';

export const useQuestionsForm = () => {
  const [addQuestion, { isLoading: isAdding, error: addError, isSuccess: addSuccess }] =
    useAddQuestionMutation();
  const [updateQuestion, { isLoading: isUpdating, error: updateError, isSuccess: updateSuccess }] =
    useUpdateQuestionMutation();
  const { isAuthenticated } = useAuth();

  return {
    isAuthenticated,
    addQuestion,
    updateQuestion,
    isLoading: isAdding || isUpdating,
    error: addError || updateError,
    isSuccess: addSuccess || updateSuccess,
  };
};
