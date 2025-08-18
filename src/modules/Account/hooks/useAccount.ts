import { useSelector } from 'react-redux';
import { selectAccountProps } from '../api/account.selector';
import { useDeleteAccountMutation, useGetAccountQuery } from '../api/account.api';
import type { AppState } from '@/types/store.types';
import { useLogout } from '@/modules/Auth/hooks/useLogout';

export const useAccount = () => {
  const account = useSelector(selectAccountProps);
  const { handleLogout } = useLogout();
  const { isLoading, isError } = useGetAccountQuery();

  const [deleteAccountMutation] = useDeleteAccountMutation();

  const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);

  const deleteAccont = async () => {
    handleLogout();
    await deleteAccountMutation().unwrap();
  };

  return {
    account,
    isLoading,
    isError,
    isAuthenticated,
    deleteAccont,
    handleLogout,
  };
};
