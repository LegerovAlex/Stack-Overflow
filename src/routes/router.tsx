import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthPage } from '@/pages/AuthPage/AuthPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { AuthProtectedRoute } from '@/components/AuthProtectedRoute/AuthProtectedRoute';
import { MainLayout } from '@/layouts';
import { SnippetPage } from '@/pages/SnippetPage/SnippetPage';
import { AccountPage } from '@/pages';
import { PostSnippetPage } from '@/pages/PostSnippetPage/PostSnippetPage';
import { MySnippetsPage } from '@/pages/MySnippetsPage/MySnippetsPage';

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
        element: <PostSnippetPage />,
      },
      {
        path: RoutesPaths.SNIPPETS,
        element: <MySnippetsPage />,
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
