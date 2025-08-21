import { Box, IconButton, TextField } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { commentInputStyles } from './CommentInput.styles';
import type { FieldValues } from 'react-hook-form';
import type { CommentInputProps } from './CommentInput.props';

export const CommentInput = <T extends FieldValues>({
  register,
  onSubmit,
  fieldName,
  isSubmitting,
  placeholder,
}: CommentInputProps<T>) => {
  return (
    <Box sx={commentInputStyles.form} component="form" onSubmit={onSubmit}>
      <TextField
        multiline
        rows={3}
        sx={commentInputStyles.input}
        placeholder={placeholder}
        {...register(fieldName, { required: true })}
      />
      <IconButton sx={commentInputStyles.button} type="submit" disabled={isSubmitting}>
        <AddCommentIcon />
      </IconButton>
    </Box>
  );
};
