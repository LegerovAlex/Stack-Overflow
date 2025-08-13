import { useTranslation } from 'react-i18next';
import { useSnippet } from '../../hooks/useSnippet';
import { SnippetCard } from '@/components';
import { Typography } from '@mui/material';
import { Spinner } from '@/ui';

export const Snippet = () => {
  const { t } = useTranslation();
  const { snippet, isLoading, isError } = useSnippet();

  if (isLoading) return <Spinner />;
  if (isError || !snippet) return <Typography>{t('snippets.errors.loadFailed')}</Typography>;

  return <SnippetCard {...snippet} />;
};
