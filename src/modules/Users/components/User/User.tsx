import { UserCard } from '@/components';
import { UserStats } from '@/components/UserStats/UserStats';
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useUser } from '../../hooks/useUser';
import { Spinner } from '@/ui';
import { useTranslation } from 'react-i18next';

export const User: FC = () => {
  const { t } = useTranslation();

  const { user, statistics, isStatisticsLoading, statisticsError } = useUser();

  if (isStatisticsLoading) {
    return <Spinner />;
  }

  if (statisticsError || !user || !statistics) {
    return <Typography>{t('users.errors.loadFailed')}</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <UserCard showActions={false} {...user} />
      <UserStats {...statistics} />
    </Box>
  );
};
