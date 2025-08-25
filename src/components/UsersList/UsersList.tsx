import { Box, Card, CardContent, Typography } from '@mui/material';
import type { FC } from 'react';
import type { UsersListProps } from './UsersList.props';
import { usersListStyles } from './UsersList.styles';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';

export const UsersList: FC<UsersListProps> = ({ users, lastElementRef }) => {
  const { t } = useTranslation();

  return (
    <Box sx={usersListStyles.container}>
      {users.map((user, index) => {
        const isLastElement = index === users.length - 1;
        return (
          <Card
            sx={usersListStyles.card}
            key={user.id}
            component={NavLink}
            to={`${RoutesPaths.USER}/${user.id}`}
            ref={isLastElement ? lastElementRef : null}
          >
            <CardContent>
              <Typography sx={usersListStyles.username}>
                {t('account.user.username')}
                {user.username}
              </Typography>
              <Typography sx={usersListStyles.role}>
                {t('account.user.role')}
                {user.role}
              </Typography>
              <Typography sx={usersListStyles.id}>
                {t('account.user.id')}
                {user.id}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
