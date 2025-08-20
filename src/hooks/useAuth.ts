import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { AppState } from '@/types/store.types';
import { authAction } from '@/store/Auth/authSlice';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useCallback } from 'react';
import { useLogoutMutation } from '@/modules/Auth/api/auth.api';
import { accountAction } from '@/modules/Account/api/accountSlice';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const { isAuthenticated } = useSelector((state: AppState) => state.auth);
  const { account } = useSelector((state: AppState) => state.account);

  const handleLogout = useCallback(async () => {
    if (account && isAuthenticated) {
      await logout().unwrap();
      dispatch(authAction.clearAuthenticated());
      dispatch(accountAction.clearAccount());
    }

    if (!account) {
      navigate(RoutesPaths.AUTH);
    }
  }, [isAuthenticated, account, logout]);

  return {
    handleLogout,
    isLoading,
    account,
    isAuthenticated,
  };
};
