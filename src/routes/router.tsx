import { createBrowserRouter } from 'react-router';
import { RoutesPaths } from './routeesPaths';
import { AuthProtectedRoute } from '@/components';
import { MainLayout } from '@/layouts';
import { lazy, Suspense } from 'react';
import { Spinner } from '@/ui';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SnippetPage = lazy(() => import('@/pages/SnippetPage'));
const AccountPage = lazy(() => import('@/pages/AccountPage'));
const PostSnippetPage = lazy(() => import('@/pages/PostSnippetPage'));
const MySnippetsPage = lazy(() => import('@/pages/MySnippetsPage'));
const QuestionPage = lazy(() => import('@/pages/QuestionsPage'));
const PostQuestionPage = lazy(() => import('@/pages/PostQuestionPage'));
const UsersPage = lazy(() => import('@/pages/UsersPage'));
const UserPage = lazy(() => import('@/pages/UserPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));

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
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: `${RoutesPaths.SNIPPET}/:id`,
        element: (
          <Suspense fallback={<Spinner />}>
            <SnippetPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPaths.ACCOUNT,
        element: (
          <Suspense fallback={<Spinner />}>
            <AccountPage />
          </Suspense>
        ),
      },
      {
        path: `${RoutesPaths.POSTS}/:id?`,
        element: (
          <Suspense fallback={<Spinner />}>
            <PostSnippetPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPaths.SNIPPETS,
        element: (
          <Suspense fallback={<Spinner />}>
            <MySnippetsPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPaths.QUESTIONS,
        element: (
          <Suspense fallback={<Spinner />}>
            <PostQuestionPage />
          </Suspense>
        ),
      },
      {
        path: `${RoutesPaths.QUESTION_CREATE}/:id?`,
        element: (
          <Suspense fallback={<Spinner />}>
            <QuestionPage />
          </Suspense>
        ),
      },
      {
        path: RoutesPaths.USERS,
        element: (
          <Suspense fallback={<Spinner />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: `${RoutesPaths.USER}/:id`,
        element: (
          <Suspense fallback={<Spinner />}>
            <UserPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFoundPage />
          </Suspense>
        ),
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
