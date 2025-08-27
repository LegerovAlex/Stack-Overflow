import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { SnippetList } from '@/components';
import { Spinner } from '@/ui';
import { useMySnippets } from '../../hooks/useMySnippet';

export const MySnippets: FC = () => {
  const { t } = useTranslation();

  const { isAuthenticated, isError, isLoading, snippets, handleLike, handleComment } =
    useMySnippets();

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <SnippetList onLike={handleLike} onComment={handleComment} items={snippets} />
      )}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
