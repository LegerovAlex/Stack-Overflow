import { useSelector } from 'react-redux';
import { selectLanguagesProps } from '../api/snippets.selector';
import {
  useAddSnippetMutation,
  useGetLanguagesQuery,
  useUpdateSnippetMutation,
} from '../api/snippets.api';
import { useAuth } from '@/hooks/useAuth';

export const useCreateSnippetForm = () => {
  const languages = useSelector(selectLanguagesProps);
  useGetLanguagesQuery();

  const { isAuthenticated } = useAuth();

  const [updateSnippet, { isLoading: isUpdating, error: updateError, isSuccess: updateSuccess }] =
    useUpdateSnippetMutation();

  const [addSnippet, { isLoading: isAdding, error: addError, isSuccess: addSuccess }] =
    useAddSnippetMutation();

  return {
    languages,
    isLoading: isAdding || isUpdating,
    error: addError || updateError,
    isAuthenticated,
    isSuccess: addSuccess || updateSuccess,
    addSnippet,
    updateSnippet,
  };
};
