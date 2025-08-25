import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { useSnippets } from '../../hooks/useSnippets';
import { SnippetList } from '@/components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { snippetsAction } from '../../api/snippetsSlice';

export const Snippets = () => {
  const { t } = useTranslation();
  const { snippets, isLoading, isError, isFetching, lastElementRef, handleComment, handleLike } =
    useSnippets();

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(snippetsAction.resetSnippets());
    };
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SnippetList
            lastElementRef={lastElementRef}
            onLike={handleLike}
            onComment={handleComment}
            items={snippets}
          />
          {isFetching && <Spinner />}
        </>
      )}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
