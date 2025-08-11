import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { snippetCardStyles } from './SnippetCard.styles';
import { SnippetActions } from '@/ui';
import { type FC } from 'react';
import type { SnippetCardProps } from './SnippetCard.props';

export const SnippetCard: FC<SnippetCardProps> = ({
  likes,
  comments,
  dislikes,
  onComment,
  onDislike,
  onLike,
  username,
  language,
  code,
  id,
}) => {
  return (
    <Card sx={snippetCardStyles.card}>
      <CardHeader
        avatar={
          <Avatar>
            <PersonIcon />
          </Avatar>
        }
        title={username}
        subheader={language}
      />
      <CardContent>
        <Typography sx={snippetCardStyles.codeBlock}>{code}</Typography>
      </CardContent>
      <SnippetActions
        likes={likes}
        dislikes={dislikes}
        comments={comments}
        onLike={onLike}
        onDislike={onDislike}
        onComment={onComment}
        id={id}
      />
    </Card>
  );
};
