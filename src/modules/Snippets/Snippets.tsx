import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { SnippetList } from './components/SnippetList/SnippetList';
import { Spinner } from '@/ui';
import { useSnippets } from './hooks/useSnippets';

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
