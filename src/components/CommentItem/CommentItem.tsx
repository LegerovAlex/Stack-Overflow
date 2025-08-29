import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import type { CommentItemProps } from './CommentItem.props';
import { commentItemStyles } from './CommentItem.styles';

export const CommentItem: FC<CommentItemProps> = ({ content, username }) => {
  return (
    <Box sx={commentItemStyles.container}>
      <Typography sx={commentItemStyles.user}>{username}</Typography>
      <Typography sx={commentItemStyles.content}>{content}</Typography>
    </Box>
  );
};
