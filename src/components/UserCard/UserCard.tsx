import type { FC } from 'react';
import type { UserCardProps } from './UserCard.props';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userCardStyles } from './UserCard.styles';

export const UserCard: FC<UserCardProps> = ({ id, role, username, onDelete, onLogout }) => {
  const { t } = useTranslation();

  const handleLogoutClick = () => {
    onLogout();
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <Card sx={userCardStyles.card}>
      <Avatar sx={userCardStyles.avatar} />
      <Box>
        <CardContent sx={userCardStyles.content}>
          <Typography sx={userCardStyles.username}>{username}</Typography>
          <Typography>
            {t('account.user.id')}
            {id}
          </Typography>
          <Typography>
            {t('account.user.role')}
            {role}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleLogoutClick}>
            <LogoutIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleDeleteClick}>
            <DeleteOutlineIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};
