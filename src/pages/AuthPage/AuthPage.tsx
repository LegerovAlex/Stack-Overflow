import { AuthLayout } from '@/layouts';
import { AuthForm } from '@/modules';
import type { FC } from 'react';

export const AuthPage: FC = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};
