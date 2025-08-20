import { RoutesPaths } from '@/routes/routeesPaths';
import { Spinner } from '@/ui';
import type { FC } from 'react';
import { Navigate } from 'react-router';
import type { AuthProtectedRouteProps } from './AuthPtotectedRoute.props';
import { useGetAccountQuery } from '@/modules/Account/api/account.api';
import { useAuth } from '@/hooks/useAuth';

export const AuthProtectedRoute: FC<AuthProtectedRouteProps> = ({
  children,
  requireAuth = false,
}) => {
  const { isLoading } = useGetAccountQuery();

  const { isAuthenticated, account } = useAuth();

  if (isLoading) return <Spinner />;
  if (isAuthenticated && account && requireAuth) {
    return <Navigate to={`${RoutesPaths.ROOT}`} replace />;
  }
  return children;
};
