import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuestions } from '../../hooks/useQuestions';
import { PrimaryButton, Spinner } from '@/ui';
import { Box, Typography } from '@mui/material';
import { QuestionsList } from '@/components';
import { questionsStyles } from './Questions.styles';
import { useNavigate } from 'react-router';
import { RoutesPaths } from '@/routes/routeesPaths';
import { useQuestionsActions } from '../../hooks/useQuestionActions';

export const Questions: FC = () => {
  const { t } = useTranslation();
  const { questions, isLoading, isFetchingNextPage, error, lastElementRef } = useQuestions();
  const { handleDelete, handleEdit } = useQuestionsActions();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(RoutesPaths.QUESTION_CREATE);
  };

  if (isLoading) return <Spinner />;

  return (
    <Box sx={questionsStyles.container}>
      <PrimaryButton onClick={handleClick}>{t('button.createQuestion')}</PrimaryButton>
      <QuestionsList
        items={questions}
        lastElementRef={lastElementRef}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {isFetchingNextPage && <Spinner />}
      {error && <Typography>{t('questions.errors.loadFailed')}</Typography>}
    </Box>
  );
};
