import { useSelector } from 'react-redux';
import { selectLanguagesProps } from '../api/snippets.selector';
import { useAddSnippetMutation, useGetLanguagesQuery } from '../api/snippets.api';
import { useAuth } from '@/hooks/useAuth';

export const useCreateSnippetForm = () => {
  const languages = useSelector(selectLanguagesProps);
  useGetLanguagesQuery();

  const { isAuthenticated } = useAuth();

  const [addSnippet, { isLoading, error, isSuccess }] = useAddSnippetMutation();

  return {
    languages,
    isLoading,
    error,
    isAuthenticated,
    isSuccess,
    addSnippet,
  };
};
