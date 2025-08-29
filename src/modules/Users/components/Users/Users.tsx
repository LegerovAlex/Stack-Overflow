import { UsersList } from '@/components';
import { useUsers } from '../../hooks/useUsers';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { usersStyles } from './Users.style';
export const Users = () => {
  const { t } = useTranslation();
  const { error, isLoading, users, isFetchingNextPage, lastElementRef } = useUsers();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box sx={usersStyles.container}>
          <Typography sx={usersStyles.title}>{t('users.title')}</Typography>
          <UsersList lastElementRef={lastElementRef} users={users} />
          {isFetchingNextPage && <Spinner />}
        </Box>
      )}
      {error && <Typography>{t('users.errors.loadFailed')}</Typography>}
    </>
  );
};
