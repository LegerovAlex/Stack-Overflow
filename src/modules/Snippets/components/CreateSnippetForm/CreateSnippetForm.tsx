import { CodeInput, LanguageSelect, SuccessSnackbar } from '@/components';
import { Box, Typography } from '@mui/material';
import { useEffect, type FC } from 'react';
import { useCreateSnippetForm } from '../../hooks/useCreateSnippetForm';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/ui';
import { createSnippetFormStyles } from './CreateSnippetForm.styles';
import type { SnippetFormValue } from './CreateSnippetForm.props';

export const CreateSnippetForm: FC = () => {
  const { t } = useTranslation();
  const { languages, addSnippet, error, isLoading, isAuthenticated, isSuccess } =
    useCreateSnippetForm();
  const { control, handleSubmit, reset } = useForm<SnippetFormValue>();

  useEffect(() => {
    if (languages.length) {
      reset((prev) => ({
        ...prev,
        language: prev.language || languages[0],
      }));
    }
  }, [languages, reset]);

  const onSubmit = async (data: SnippetFormValue) => {
    await addSnippet(data).unwrap();
    reset({
      code: '',
      language: languages[0] || '',
    });
  };

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <Box sx={createSnippetFormStyles.component}>
      <Typography sx={createSnippetFormStyles.title}>{t('createSnippetForm.title')}</Typography>
      <Box component="form" sx={createSnippetFormStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <LanguageSelect
          name="language"
          label={t('createSnippetForm.labels.helperLabel')}
          control={control}
          options={languages}
          rules={{ required: t('createSnippetForm.errors.languageRequired') }}
        />
        <CodeInput
          placeholder={t('placeholders.writeCode')}
          rules={{ required: t('createSnippetForm.errors.required') }}
          control={control}
          name="code"
          label={t('labels.codeSnippet')}
        />
        <PrimaryButton disabled={isLoading} type="submit">
          {t('button.createSnippet')}
        </PrimaryButton>
        <SuccessSnackbar isSuccess={isSuccess} message={t('alert')} />
        {error && (
          <Typography sx={createSnippetFormStyles.errorMessage}>
            {t('createSnippetForm.errors.createSnippet')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
