import { useGetCurrentUserQuery } from '@/modules/Auth/api/auth.api';
import { RoutesPaths } from '@/routes/routeesPaths';
import type { AppState } from '@/types/store.types';
import { Spinner } from '@/ui';
import type { FC } from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router';
import type { AuthProtectedRouteProps } from './AuthPtotectedRoute.props';

export const AuthProtectedRoute: FC<AuthProtectedRouteProps> = ({
  children,
  requireAuth = false,
}) => {
  const { isLoading } = useGetCurrentUserQuery();

  const { isAuthenticated, user } = useSelector((state: AppState) => state.auth);

  if (isLoading) return <Spinner />;
  if (isAuthenticated && user && requireAuth) {
    return <Navigate to={`${RoutesPaths.ROOT}`} replace />;
  }
  return children;
};
