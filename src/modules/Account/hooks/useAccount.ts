import { useSelector } from 'react-redux';
import { selectAccountProps } from '../api/account.selector';
import { useDeleteAccountMutation, useGetAccountQuery } from '../api/account.api';
import { useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const useAccount = () => {
  const account = useSelector(selectAccountProps);
  const { handleLogout, isAuthenticated } = useAuth();
  const { isLoading, isError } = useGetAccountQuery();

  const [deleteAccountMutation] = useDeleteAccountMutation();

  const deleteAccont = useCallback(async () => {
    handleLogout();
    await deleteAccountMutation().unwrap();
  }, [handleLogout, deleteAccountMutation]);

  return {
    account,
    isLoading,
    isError,
    isAuthenticated,
    deleteAccont,
    handleLogout,
  };
};
