import { AuthLayout } from '@/layouts';
import { AuthForm } from '@/modules/AuthForm/AuthForm';
import type { FC } from 'react';

export const AuthPage: FC = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};
