import { Box, IconButton, TextField } from '@mui/material';
import type { FC } from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { commentInputStyles } from './CommentInput.styles';

export const CommentInput: FC = () => {
  return (
    <Box sx={commentInputStyles.form} component="form">
      <TextField multiline rows={3} sx={commentInputStyles.input} placeholder="Add Comment" />
      <IconButton sx={commentInputStyles.button}>
        <AddCommentIcon />
      </IconButton>
    </Box>
  );
};
