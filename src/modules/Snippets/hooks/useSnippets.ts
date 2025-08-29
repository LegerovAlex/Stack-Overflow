import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useGetSnippetsInfiniteQuery } from '../api/snippets.api';
import { selectSnippetCardProps } from '../api/snippets.selector';
import { useAuth } from '@/hooks/useAuth';
import { useInView } from 'react-intersection-observer';
import { useSnippetActions } from './useSnippetActions';

export const useSnippets = () => {
  const { isAuthenticated } = useAuth();

  const { fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch } =
    useGetSnippetsInfiniteQuery();

  const lockRef = useRef(false);
  const [ref, inView] = useInView({ threshold: 0.9 });

  const snippets = useSelector(selectSnippetCardProps());

  useEffect(() => {
    if (inView && hasNextPage && !lockRef.current) {
      lockRef.current = true;
      fetchNextPage().finally(() => {
        lockRef.current = false;
      });
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const { handleComment, handleLike, handleDelete } = useSnippetActions();

  return {
    handleLike,
    handleComment,
    snippets,
    isLoading,
    lastElementRef: ref,
    handleDelete,
    isFetchingNextPage,
    isAuthenticated,
    isError,
    refetch,
  };
};
