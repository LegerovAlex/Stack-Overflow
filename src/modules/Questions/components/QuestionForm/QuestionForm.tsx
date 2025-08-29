import { CodeInput, FormInput, SuccessSnackbar } from '@/components';
import { PrimaryButton } from '@/ui';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { questionFormStyles } from './QuestionForm.styles';
import type { QuestionFormProps } from './QuestionForm.props';

import type { FC } from 'react';
import { useQuestionsForm } from '../../hooks/useQuestionForm';
import type { QuestionFormValue } from '@/interfaces/api.interfaces';

export const QuestionForm: FC<QuestionFormProps> = ({ initialValues, questionId }) => {
  const { t } = useTranslation();

  const { addQuestion, updateQuestion, isLoading, error, isAuthenticated, isSuccess } =
    useQuestionsForm();

  const { control, handleSubmit, reset } = useForm<QuestionFormValue>({
    defaultValues: initialValues,
  });

  const onSubmit = async (data: QuestionFormValue) => {
    if (questionId) {
      await updateQuestion({ id: questionId, data }).unwrap();
      reset({ title: '', description: '', attachedCode: '' });
    } else {
      await addQuestion(data).unwrap();
      reset({ attachedCode: '' });
    }
  };

  const isEditMode = Boolean(questionId);
  const titleText = isEditMode ? t('questions.editTitle') : t('questions.title');
  const buttonText = isEditMode ? t('button.updateQuestion') : t('button.createQuestion');

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <Box sx={questionFormStyles.component}>
      <Typography sx={questionFormStyles.title}>{titleText}</Typography>
      <Box sx={questionFormStyles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          control={control}
          name="title"
          placeholder={t('placeholders.questionTitle')}
          rules={{ required: t('createSnippetForm.errors.required') }}
        />
        <FormInput
          control={control}
          name="description"
          rules={{ required: t('createSnippetForm.errors.required') }}
          placeholder={t('placeholders.questionDesc')}
        />
        <CodeInput
          placeholder={t('placeholders.writeCode')}
          rules={{ required: t('createSnippetForm.errors.required') }}
          control={control}
          name="attachedCode"
          label={t('labels.question')}
        />
        <PrimaryButton disabled={isLoading} type="submit">
          {buttonText}
        </PrimaryButton>
        <SuccessSnackbar isSuccess={isSuccess} message={t('alert')} />
        {error && (
          <Typography sx={questionFormStyles.errorMessage}>
            {t('createSnippetForm.errors.createSnippet')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
