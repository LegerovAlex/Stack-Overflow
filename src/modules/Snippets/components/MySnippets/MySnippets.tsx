import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnippets } from '../../hooks/useSnippets';
import { Typography } from '@mui/material';
import { SnippetList } from '@/components';
import { Spinner } from '@/ui';
import { useAuth } from '@/hooks/useAuth';

export const MySnippets: FC = () => {
  const { t } = useTranslation();
  const { account } = useAuth();
  const { snippets, isLoading, isError } = useSnippets(account?.id);

  return (
    <>
      {isLoading ? <Spinner /> : <SnippetList items={snippets} />}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
