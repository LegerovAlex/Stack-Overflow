import { CodeInput, FormInput } from '@/components';
import { PrimaryButton } from '@/ui';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { questionFormStyles } from './QuestionForm.styles';
import type { QuestionFormValue } from './QuestionForm.props';
import { useCreateQuestionsForm } from '../../hooks/useCreateQuestionForm';

export const QuestionForm = () => {
  const { t } = useTranslation();

  const { addQuestion, error, isAuthenticated, isLoading } = useCreateQuestionsForm();

  const { control, handleSubmit, reset } = useForm<QuestionFormValue>();

  const onSubmit = async (data: QuestionFormValue) => {
    await addQuestion(data).unwrap();
    reset({
      attachedCode: '',
    });
  };

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <Box sx={questionFormStyles.component}>
      <Typography sx={questionFormStyles.title}>{t('questions.title')}</Typography>
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
          {t('button.createQuestion')}
        </PrimaryButton>
        {error && (
          <Typography sx={questionFormStyles.errorMessage}>
            {t('createSnippetForm.errors.createSnippet')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
