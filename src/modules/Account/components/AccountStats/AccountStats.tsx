import { useStatistic } from '@/modules/Account/hooks/useStatistic';
import { Spinner } from '@/ui';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { statsItem } from '../../constant/stats.count';
import { accountStatsStyles } from './AccountStats.styles';

export const AccountStats = ({ id }: { id: string }) => {
  const { t } = useTranslation();

  const { isLoading, statistic, error } = useStatistic(id);

  if (isLoading) return <Spinner />;

  if (!statistic || error) return <Typography>{t('account.errors.statisticFailed')}</Typography>;

  return (
    <Box sx={accountStatsStyles.container}>
      <List sx={accountStatsStyles.list}>
        {statsItem.map((item) => (
          <ListItem sx={accountStatsStyles.item} key={item.id}>
            <Typography sx={accountStatsStyles.primaryText}>{t(item.label)}</Typography>
            <Typography>{statistic[item.field]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
