import { RoutesPaths } from '@/routes/routeesPaths';
import type { FC } from 'react';
import { Navigate } from 'react-router';
import type { AuthProtectedRouteProps } from './AuthPtotectedRoute.props';
import { useGetAccountQuery } from '@/modules/Account/api/account.api';
import { useAuth } from '@/hooks/useAuth';

export const AuthProtectedRoute: FC<AuthProtectedRouteProps> = ({
  children,
  requireAuth = false,
}) => {
  useGetAccountQuery();

  const { isAuthenticated, account } = useAuth();

  if (isAuthenticated && account && requireAuth) {
    return <Navigate to={`${RoutesPaths.ROOT}`} replace />;
  }
  return children;
};
