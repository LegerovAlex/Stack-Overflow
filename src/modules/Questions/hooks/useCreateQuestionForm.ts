import { useAuth } from '@/hooks/useAuth';
import { useAddQuestionMutation } from '../api/questions.api';

export const useCreateQuestionsForm = () => {
  const [addQuestion, { isLoading, error }] = useAddQuestionMutation();
  const { isAuthenticated } = useAuth();

  return { isLoading, addQuestion, error, isAuthenticated };
};
