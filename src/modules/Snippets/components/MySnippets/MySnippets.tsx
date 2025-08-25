import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnippets } from '../../hooks/useSnippets';
import { Typography } from '@mui/material';
import { SnippetList } from '@/components';
import { Spinner } from '@/ui';
import { useAuth } from '@/hooks/useAuth';

export const MySnippets: FC = () => {
  const { t } = useTranslation();
  const { account, isAuthenticated } = useAuth();
  const { snippets, isLoading, isError, handleComment, handleLike } = useSnippets(
    isAuthenticated ? account?.id : null,
  );

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <SnippetList onComment={handleComment} onLike={handleLike} items={snippets} />
      )}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
