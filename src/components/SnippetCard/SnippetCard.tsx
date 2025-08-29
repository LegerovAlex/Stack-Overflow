import { forwardRef } from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { snippetCardStyles } from './SnippetCard.styles';
import { SnippetActions } from '@/ui';
import type { SnippetCardProps } from './SnippetCard.props';

export const SnippetCard = forwardRef<HTMLDivElement, SnippetCardProps>(
  (
    {
      likes,
      comments,
      dislikes,
      userMarkType,
      username,
      language,
      isMine,
      onEdit,
      code,
      id,
      onDelete,
      onComment,
      onMark,
    },
    ref,
  ) => {
    return (
      <Card sx={snippetCardStyles.card} ref={ref}>
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
          isMine={isMine}
          userMarkType={userMarkType}
          likes={likes}
          code={code}
          language={language}
          dislikes={dislikes}
          comments={comments}
          onDelete={onDelete}
          onEdit={onEdit}
          onMark={onMark}
          onComment={onComment}
          id={id}
        />
      </Card>
    );
  },
);
