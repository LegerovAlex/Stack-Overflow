import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

import { Spinner } from '@/ui';
import { useSnippets } from '../../hooks/useSnippets';
import { SnippetList } from '@/components';

export const Snippets = () => {
  const { t } = useTranslation();
  const { snippets, isLoading, isError } = useSnippets();
  return (
    <>
      {isLoading ? <Spinner /> : <SnippetList items={snippets} />}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
