import { useSelector } from 'react-redux';
import { selectLanguagesProps } from '../api/snippets.selector';
import { useAddSnippetMutation, useGetLanguagesQuery } from '../api/snippets.api';

export const useCreateSnippetForm = () => {
  const languages = useSelector(selectLanguagesProps);
  useGetLanguagesQuery();

  const [addSnippet, { isLoading, error }] = useAddSnippetMutation();

  return {
    languages,
    isLoading,
    error,
    addSnippet,
  };
};
