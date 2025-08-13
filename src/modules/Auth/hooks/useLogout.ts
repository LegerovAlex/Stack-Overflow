import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLogoutMutation } from '../api/auth.api';
import type { AppState } from '@/types/store.types';
import { authAction } from '@/store/Auth/authSlice';
import { RoutesPaths } from '@/routes/routeesPaths';

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const { isAuthenticated, user } = useSelector((state: AppState) => state.auth);

  const handleLogout = async () => {
    if (user && isAuthenticated) {
      await logout().unwrap();
      dispatch(authAction.clearUser());
    }

    if (!user) {
      navigate(RoutesPaths.AUTH);
    }
  };

  return {
    handleLogout,
    isLoading,
    isAuthenticated,
  };
};
