import { forwardRef } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { questionCardStyles } from './QuestionCard.styles';
import { useTranslation } from 'react-i18next';
import type { QuestionCardProps } from './QuestionCard.prop';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ code, description, isResolved, title, username, id, isMine, onDelete, onEdit }, ref) => {
    const { t } = useTranslation();

    const handleDeleteClick = () => {
      if (onDelete && id) {
        onDelete(id);
      }
    };

    const hadleEditClick = () => {
      if (onEdit && id) {
        onEdit(id, { title, description, attachedCode: code });
      }
    };

    return (
      <Card sx={questionCardStyles.card} ref={ref}>
        <CardHeader
          avatar={
            <Avatar>
              <QuestionMarkIcon />
            </Avatar>
          }
          title={title}
          subheader={username}
        />
        <CardContent>
          <Typography>{description}</Typography>
          <Typography sx={questionCardStyles.codeBlock}>{code}</Typography>
          <Typography sx={questionCardStyles.status}>
            {isResolved ? t('questions.status.resolved') : t('questions.status.notResolved')}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          {isMine && (
            <>
              <IconButton onClick={handleDeleteClick}>
                <DeleteOutlineIcon />
              </IconButton>
              <IconButton onClick={hadleEditClick}>
                <EditIcon />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
    );
  },
);
