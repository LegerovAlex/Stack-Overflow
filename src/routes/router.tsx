import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthPage } from '@/pages/AuthPage/AuthPage';

export const router = createBrowserRouter([
  {
    path: RoutesPaths.AUTH,
    element: <AuthPage />,
  },
]);
