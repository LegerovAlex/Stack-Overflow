import { useGetUsersInfiniteQuery } from '../api/users.api';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { transformUsers } from '../api/users.transform';

export const useUsers = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUsersInfiniteQuery();

  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  const lockRef = useRef(false);

  useEffect(() => {
    if (inView && hasNextPage && !lockRef.current) {
      lockRef.current = true;
      fetchNextPage().finally(() => {
        lockRef.current = false;
      });
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const users = transformUsers(data?.pages?.flatMap((page) => page.data) ?? []);

  return {
    users,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    lastElementRef: ref,
  };
};
