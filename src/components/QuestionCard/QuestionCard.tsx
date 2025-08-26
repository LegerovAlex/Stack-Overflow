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

export const QuestionCard = forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ code, description, isResolved, title, username }, ref) => {
    const { t } = useTranslation();

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
        </CardActions>
      </Card>
    );
  },
);
