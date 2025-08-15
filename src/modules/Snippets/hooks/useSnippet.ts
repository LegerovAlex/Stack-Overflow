import { useParams } from 'react-router';
import { useGetSnippetQuery } from '../api/snippets.api';
import { useSelector } from 'react-redux';
import { selectSnippetCardPropsByID } from '../api/snippet.selector';
import { selectCommentsProps } from '../api/comments.selector';
import type { AppState } from '@/types/store.types';

export const useSnippet = () => {
  const { id } = useParams();

  const snippet = useSelector(selectSnippetCardPropsByID);
  const comments = useSelector(selectCommentsProps);
  const { isLoading, isError } = useGetSnippetQuery(id!);

  const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

  return {
    id,
    isLoading,
    isError,
    snippet,
    comments,
    isAuthenticated,
  };
};
