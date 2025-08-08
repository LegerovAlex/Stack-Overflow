import type { ReactNode } from 'react';

export interface AuthProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
}
