import { useParams } from 'react-router';
import { useGetSnippetQuery } from '../api/snippets.api';
import { useSelector } from 'react-redux';
import { selectSnippetCardPropsByID } from '../api/snippet.selector';

export const useSnippet = () => {
  const { id } = useParams();

  const snippet = useSelector(selectSnippetCardPropsByID);

  const { isLoading, isError } = useGetSnippetQuery(id!);

  return {
    isLoading,
    isError,
    snippet,
  };
};
