import { useTranslation } from 'react-i18next';
import { useSnippet } from '../../hooks/useSnippet';
import { CommentInput, CommentList, SnippetCard } from '@/components';
import { Box, Typography } from '@mui/material';
import { Spinner } from '@/ui';
import { snippetStyles } from './Snippet.styles';
import { useForm } from 'react-hook-form';
import { useAddCommentMutation } from '../../api/snippets.api';
import { useDispatch } from 'react-redux';
import { snippetsAction } from '../../api/snippetsSlice';

export const Snippet = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { snippet, comments, isLoading, isError, id: snippetId, isAuthenticated } = useSnippet();
  const [addComment, { isLoading: isAdding }] = useAddCommentMutation();

  const { register, handleSubmit, reset } = useForm<{ content: string }>();

  const onSubmit = async (data: { content: string }) => {
    if (!snippetId) return;
    const newComment = await addComment({ snippetId, content: data.content }).unwrap();
    reset();
    dispatch(
      snippetsAction.updateSnippetComment({
        snippetId,
        comment: {
          id: newComment.data.id,
          content: newComment.data.content,
          user: newComment.data.user,
        },
      }),
    );
  };

  if (isLoading) return <Spinner />;
  if (isError || !snippet) return <Typography>{t('snippets.errors.loadFailed')}</Typography>;

  return (
    <Box sx={snippetStyles.container}>
      <SnippetCard {...snippet} />
      <CommentList comments={comments} />
      {isAuthenticated && (
        <CommentInput
          fieldName="content"
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          isSubmitting={isAdding}
        />
      )}
    </Box>
  );
};
