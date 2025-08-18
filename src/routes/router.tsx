import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthPage } from '@/pages/AuthPage/AuthPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { AuthProtectedRoute } from '@/components/AuthProtectedRoute/AuthProtectedRoute';
import { MainLayout } from '@/layouts';
import { SnippetPage } from '@/pages/SnippetPage/SnippetPage';
import { AccountPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: RoutesPaths.ROOT,
    element: (
      <AuthProtectedRoute>
        <MainLayout />
      </AuthProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `${RoutesPaths.SNIPPET}/:id`,
        element: <SnippetPage />,
      },
      {
        path: RoutesPaths.ACCOUNT,
        element: <AccountPage />,
      },
      {
        path: RoutesPaths.POSTS,
        element: <>Post Snippet</>,
      },
      {
        path: RoutesPaths.SNIPPETS,
        element: <>My Snippets</>,
      },
      {
        path: RoutesPaths.QUESTIONS,
        element: <>Questions</>,
      },
      {
        path: RoutesPaths.USERS,
        element: <>Users</>,
      },
    ],
  },
  {
    path: RoutesPaths.AUTH,
    element: (
      <AuthProtectedRoute requireAuth={true}>
        <AuthPage />
      </AuthProtectedRoute>
    ),
  },
]);
