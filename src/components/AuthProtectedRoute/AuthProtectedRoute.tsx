import { useGetCurrentUserQuery } from '@/modules/AuthForm/api/auth.api';
import { RoutesPaths } from '@/routes/routeesPaths';
import { Spinner } from '@/ui';
import type { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

export const AuthProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { data: user, isLoading } = useGetCurrentUserQuery();

  if (isLoading) return <Spinner />;
  if (user) {
    return <Navigate to={`${RoutesPaths.ROOT}`} replace />;
  }
  return children;
};
