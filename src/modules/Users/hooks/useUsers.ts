import { useGetUsersQuery } from '../api/users.api';

export const useUsers = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  const users =
    data?.map((user) => ({
      id: user.id,
      username: user.username,
      role: user.role,
    })) || [];

  return {
    users,
    error,
    isLoading,
  };
};
