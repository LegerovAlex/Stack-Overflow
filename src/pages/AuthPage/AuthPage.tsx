import { AuthLayout } from '@/layouts';
import { Auth } from '@/modules';
import type { FC } from 'react';

const AuthPage: FC = () => {
  return (
    <AuthLayout>
      <Auth />
    </AuthLayout>
  );
};

export default AuthPage;
