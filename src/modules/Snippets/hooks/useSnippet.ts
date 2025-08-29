import { useParams } from 'react-router';
import { useGetSnippetQuery } from '../api/snippets.api';
import { useSelector } from 'react-redux';
import { selectCommentsProps, selectSnippetCardPropsByID } from '../api/snippets.selector';
import { useAuth } from '@/hooks/useAuth';
import { useSnippetActions } from './useSnippetActions.ts';

export const useSnippet = () => {
  const { id } = useParams();

  const snippet = useSelector(selectSnippetCardPropsByID);
  const comments = useSelector(selectCommentsProps);
  const { isLoading, isError } = useGetSnippetQuery(id!);

  const { isAuthenticated } = useAuth();

  const { handleMarkAction, handleDelete, hadleEdit } = useSnippetActions();

  return {
    id,
    isLoading,
    isError,
    handleDelete,
    hadleEdit,
    snippet,
    comments,
    handleMarkAction,
    isAuthenticated,
  };
};
