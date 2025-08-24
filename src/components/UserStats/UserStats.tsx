import type { FC } from 'react';
import type { UserStatsProps } from './UserStats.props';
import { Box, List, ListItem, Typography } from '@mui/material';
import { statsItem } from '@/modules/Account/constant/stats.count';
import { useTranslation } from 'react-i18next';
import { userStatsStyles } from './UserStats.styles';

export const UserStats: FC<UserStatsProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Box sx={userStatsStyles.container}>
      <List sx={userStatsStyles.list}>
        {statsItem.map((item) => (
          <ListItem sx={userStatsStyles.item} key={item.id}>
            <Typography sx={userStatsStyles.primaryText}>{t(item.label)}</Typography>
            <Typography>{props[item.field]}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
