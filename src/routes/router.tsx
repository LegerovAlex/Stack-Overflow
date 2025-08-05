import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthPage } from '@/pages/AuthPage/AuthPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { AuthProtectedRoute } from '@/components/AuthProtectedRoute/AuthProtectedRoute';

export const router = createBrowserRouter([
  {
    path: RoutesPaths.ROOT,
    element: <HomePage />,
  },
  {
    path: RoutesPaths.AUTH,
    element: (
      <AuthProtectedRoute>
        <AuthPage />
      </AuthProtectedRoute>
    ),
  },
]);
