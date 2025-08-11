import { PrimaryButton } from '@/ui';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '../../api/auth.api';
import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState } from '@/types/store.types';
import { authAction } from '@/store/Auth/authSlice';

export const LogoutButton: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const { isAuthenticated, user } = useSelector((state: AppState) => state.auth);

  const handleClick = async () => {
    if (user && isAuthenticated) {
      await logout().unwrap();
      dispatch(authAction.clearUser());
    }

    if (!user) {
      navigate(RoutesPaths.AUTH);
    }
  };

  return (
    <PrimaryButton disabled={isLoading} onClick={handleClick}>
      {isAuthenticated ? t('button.logout') : t('button.login')}
    </PrimaryButton>
  );
};
