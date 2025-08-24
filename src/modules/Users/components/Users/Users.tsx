import { UsersList } from '@/components';
import { useUsers } from '../../hooks/useUsers';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { usersStyles } from './Users.style';

export const Users = () => {
  const { t } = useTranslation();
  const { error, isLoading, users } = useUsers();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Typography sx={usersStyles.title}>{t('users.title')}</Typography>
          <UsersList users={users} />
        </>
      )}
      {error && <Typography>{t('users.errors.loadFailed')}</Typography>}
    </>
  );
};
