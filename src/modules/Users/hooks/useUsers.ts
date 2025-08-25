import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useGetUsersQuery } from '../api/users.api';

export const useUsers = () => {
  const { pageNum, lastElementRef, resetPageNum, data, isLoading, isFetching, error } =
    useInfiniteScroll({
      queryHook: useGetUsersQuery,
      queryArg: { limit: 5 },
    });

  const users =
    data?.map((user) => ({
      id: user.id,
      username: user.username,
      role: user.role,
    })) || [];

  return {
    pageNum,
    users,
    error,
    isLoading,
    isFetching,
    lastElementRef,
    resetPageNum,
  };
};
