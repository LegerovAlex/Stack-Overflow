import type { FC } from 'react';
import type { SnippetActionsProps } from './SnippetActions.props';
import { CardActions, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { snippetActionsStyle } from './SnippetActions.styles';

export const SnippetActions: FC<SnippetActionsProps> = ({
  id,
  likes,
  dislikes,
  comments,
  userMarkType,
  onMark,
  onComment,
  onDelete,
  isMine,
}) => {
  const handleLike = () => {
    if (onMark && id) {
      onMark(id, userMarkType || 'none', 'like');
    }
  };

  const handleDislike = () => {
    if (onMark && id) {
      onMark(id, userMarkType || 'none', 'dislike');
    }
  };

  const handleComment = () => {
    if (onComment && id) {
      onComment(id);
    }
  };

  const handleDeleteClick = () => {
    if (onDelete && id) {
      onDelete(id);
    }
  };

  return (
    <CardActions sx={snippetActionsStyle.actions}>
      <Box sx={snippetActionsStyle.actionGroup}>
        <Box sx={snippetActionsStyle.actionItem}>
          <IconButton onClick={handleLike}>
            {userMarkType === 'like' ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
          </IconButton>
          <Typography>{likes}</Typography>
        </Box>
        <Box sx={snippetActionsStyle.actionItem}>
          <IconButton onClick={handleDislike}>
            {userMarkType === 'dislike' ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
          </IconButton>
          <Typography>{dislikes}</Typography>
        </Box>
      </Box>

      <Box sx={snippetActionsStyle.actionGroup}>
        {isMine && (
          <IconButton onClick={handleDeleteClick}>
            <DeleteOutlineIcon />
          </IconButton>
        )}
        <IconButton onClick={handleComment}>
          <CommentIcon />
        </IconButton>
        <Typography>{comments}</Typography>
      </Box>
    </CardActions>
  );
};
