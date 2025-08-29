import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { SnippetList } from '@/components';
import { Spinner } from '@/ui';
import { useMySnippets } from '../../hooks/useMySnippet';

export const MySnippets: FC = () => {
  const { t } = useTranslation();

  const {
    isAuthenticated,
    isError,
    isLoading,
    snippets,
    handleMarkAction,
    handleComment,
    handleDelete,
  } = useMySnippets();

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  if (snippets.length === 0) {
    return <Typography sx={{ fontSize: '30px' }}>{t('snippets.deletedSnippets')}</Typography>;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <SnippetList
          onMark={handleMarkAction}
          onComment={handleComment}
          onDelete={handleDelete}
          items={snippets}
        />
      )}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
