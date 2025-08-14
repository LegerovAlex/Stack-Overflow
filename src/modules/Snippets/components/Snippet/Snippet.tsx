import { useTranslation } from 'react-i18next';
import { useSnippet } from '../../hooks/useSnippet';
import { CommentInput, CommentList, SnippetCard } from '@/components';
import { Box, Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { snippetStyles } from './Snippet.styles';

export const Snippet = () => {
  const { t } = useTranslation();
  const { snippet, comments, isLoading, isError } = useSnippet();

  if (isLoading) return <Spinner />;
  if (isError || !snippet) return <Typography>{t('snippets.errors.loadFailed')}</Typography>;

  return (
    <Box sx={snippetStyles.container}>
      <SnippetCard {...snippet} />
      <CommentList comments={comments} />
      <CommentInput />
    </Box>
  );
};
