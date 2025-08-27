import { useAuth } from '@/hooks/useAuth';
import { useGetMySnippetsQuery } from '../api/snippets.api';
import { selectSnippetCardProps } from '../api/snippets.selector';
import { useSelector } from 'react-redux';
import { useSnippetActions } from './useSnippetActions.ts';

export const useMySnippets = () => {
  const { account, isAuthenticated } = useAuth();

  const { handleLike, handleComment } = useSnippetActions();

  const { isLoading, error, isError } = useGetMySnippetsQuery(
    { userId: account?.id ?? '' },
    { skip: !isAuthenticated },
  );

  const snippets = useSelector(selectSnippetCardProps(true));

  return {
    snippets,
    isLoading,
    isError,
    error,
    isAuthenticated,
    handleLike,
    handleComment,
  };
};
