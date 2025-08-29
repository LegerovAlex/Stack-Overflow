import { RoutesPaths } from '@/routes/routeesPaths';
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>{t('notFound.title')}</Typography>
      <Typography>
        {t('notFound.message')}
        <Link to={RoutesPaths.ROOT} style={{ color: '#303336ff', textDecoration: 'none' }}>
          {t('notFound.homeLink')}
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
