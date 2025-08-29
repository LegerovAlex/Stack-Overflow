import { CodeInput, LanguageSelect, SuccessSnackbar } from '@/components';
import { Box, Typography } from '@mui/material';
import { useEffect, type FC } from 'react';
import { useCreateSnippetForm } from '../../hooks/useCreateSnippetForm';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/ui';
import { createSnippetFormStyles } from './CreateSnippetForm.styles';
import type { CreateSnippetFormProps } from './CreateSnippetForm.props';
import type { SnippetFormValue } from '@/interfaces/api.interfaces';

export const CreateSnippetForm: FC<CreateSnippetFormProps> = ({ initialValues, snippetId }) => {
  const { t } = useTranslation();
  const { languages, addSnippet, error, isLoading, isAuthenticated, isSuccess, updateSnippet } =
    useCreateSnippetForm();
  const { control, handleSubmit, reset } = useForm<SnippetFormValue>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (languages.length) {
      reset((prev) => ({
        ...prev,
        language: prev.language || languages[0],
      }));
    }
  }, [languages, reset]);

  const onSubmit = async (data: SnippetFormValue) => {
    if (snippetId) {
      await updateSnippet({ id: snippetId, data }).unwrap();
      reset({
        code: '',
        language: languages[0] || '',
      });
    } else {
      await addSnippet(data).unwrap();
      reset({
        code: '',
        language: languages[0] || '',
      });
    }
  };

  const isEditMode = Boolean(snippetId);

  const titleText = isEditMode ? t('createSnippetForm.editTitle') : t('createSnippetForm.title');
  const buttonText = isEditMode ? t('button.updateSnippet') : t('button.createSnippet');

  if (!isAuthenticated)
    return <Typography sx={{ fontSize: '30px' }}>{t('account.errors.loginPrompt')}</Typography>;

  return (
    <Box sx={createSnippetFormStyles.component}>
      <Typography sx={createSnippetFormStyles.title}>{titleText}</Typography>
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
          {buttonText}
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
