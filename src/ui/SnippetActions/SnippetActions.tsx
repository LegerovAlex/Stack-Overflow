import type { FC } from 'react';
import type { SnippetActionsProps } from './SnippetActions.props';
import { CardActions, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { snippetActionsStyle } from './SnippetActions.styles';

export const SnippetActions: FC<SnippetActionsProps> = ({
  likes,
  dislikes,
  comments,
  onComment,
  onLike,
  onDislike,
  id,
}) => {
  const handleLike = () => {
    onLike(id);
  };

  const handleDislike = () => {
    onDislike(id);
  };

  const handleComment = () => {
    onComment(id);
  };

  return (
    <CardActions sx={snippetActionsStyle.actions}>
      <Box sx={snippetActionsStyle.actionGroup}>
        <Box sx={snippetActionsStyle.actionItem}>
          <IconButton onClick={handleLike}>
            <ThumbUpOffAltIcon />
          </IconButton>
          <Typography>{likes}</Typography>
        </Box>
        <Box sx={snippetActionsStyle.actionItem}>
          <IconButton onClick={handleDislike}>
            <ThumbDownOffAltIcon />
          </IconButton>
          <Typography>{dislikes}</Typography>
        </Box>
      </Box>
      <Box sx={snippetActionsStyle.actionGroup}>
        <IconButton onClick={handleComment}>
          <CommentIcon />
        </IconButton>
        <Typography>{comments}</Typography>
      </Box>
    </CardActions>
  );
};
