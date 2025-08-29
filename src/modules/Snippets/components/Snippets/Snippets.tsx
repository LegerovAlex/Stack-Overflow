import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { useSnippets } from '../../hooks/useSnippets';
import { SnippetList } from '@/components';

export const Snippets = () => {
  const { t } = useTranslation();
  const {
    snippets,
    isLoading,
    isError,
    isFetchingNextPage,
    lastElementRef,
    handleComment,
    handleMarkAction,
    handleDelete,
    hadleEdit,
  } = useSnippets();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SnippetList
            lastElementRef={lastElementRef}
            onMark={handleMarkAction}
            onComment={handleComment}
            onDelete={handleDelete}
            onEdit={hadleEdit}
            items={snippets}
          />
          {isFetchingNextPage && <Spinner />}
        </>
      )}
      {isError && <Typography>{t('snippets.errors.loadFailed')}</Typography>}
    </>
  );
};
