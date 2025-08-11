import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { SnippetList } from './components/SnippetList/SnippetList';
import {
  useDislikeSnippetMutation,
  useGetSnippetsQuery,
  useLikeSnippetMutation,
} from './api/snippets.api';
import { Spinner } from '@/ui';
import { mapSnippetsToCards } from './utils/mapSnippetsToCards';

export const Snippets = () => {
  const { t } = useTranslation();
  const { data: snippets, isLoading, isError } = useGetSnippetsQuery();
  const [likeSnippet] = useLikeSnippetMutation();
  const [dislikeSnippet] = useDislikeSnippetMutation();

  const items = mapSnippetsToCards(snippets?.data || [], likeSnippet, dislikeSnippet, (id) =>
    console.log('comment', id),
  );

  return (
    <>
      {isLoading ? <Spinner /> : <SnippetList items={items} />}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
