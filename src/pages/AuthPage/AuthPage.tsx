import { AuthLayout } from '@/layouts';
import { Auth } from '@/modules';
import type { FC } from 'react';

export const AuthPage: FC = () => {
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
};
