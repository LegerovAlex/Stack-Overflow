import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { snippetCardStyles } from './SnippetCard.styles';
import { SnippetActions } from '@/ui';
import { type FC } from 'react';
import type { SnippetCardProps } from './SnippetCard.props';
import { useSnippets } from '@/modules/Snippets/hooks/useSnippets';

export const SnippetCard: FC<SnippetCardProps> = ({
  likes,
  comments,
  dislikes,
  userMarkType,
  username,
  language,
  code,
  id,
}) => {
  const { handleLike, handleComment } = useSnippets();

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
        userMarkType={userMarkType}
        likes={likes}
        dislikes={dislikes}
        comments={comments}
        onLike={handleLike(id, userMarkType || 'none', 'like')}
        onDislike={handleLike(id, userMarkType || 'none', 'dislike')}
        onComment={handleComment(id)}
        id={id}
      />
    </Card>
  );
};
