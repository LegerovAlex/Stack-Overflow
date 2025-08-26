import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthProtectedRoute } from '@/components';
import { MainLayout } from '@/layouts';
import {
  AccountPage,
  AuthPage,
  HomePage,
  MySnippetsPage,
  PostQuestionPage,
  PostSnippetPage,
  QuestionPage,
  SnippetPage,
  UserPage,
  UsersPage,
} from '@/pages';

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
        element: <QuestionPage />,
      },
      {
        path: RoutesPaths.QUESTION_CREATE,
        element: <PostQuestionPage />,
      },
      {
        path: RoutesPaths.USERS,
        element: <UsersPage />,
      },
      {
        path: `${RoutesPaths.USER}/:id`,
        element: <UserPage />,
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
