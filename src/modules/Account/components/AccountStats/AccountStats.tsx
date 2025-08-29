import { useStatistic } from '@/modules/Account/hooks/useStatistic';
import { Spinner } from '@/ui';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { UserStats } from '@/components/UserStats/UserStats';

export const AccountStats = ({ id }: { id: string }) => {
  const { t } = useTranslation();

  const { isLoading, statistic, error } = useStatistic(id);

  if (isLoading) return <Spinner />;

  if (!statistic || error) return <Typography>{t('account.errors.statisticFailed')}</Typography>;

  return <UserStats {...statistic} />;
};
