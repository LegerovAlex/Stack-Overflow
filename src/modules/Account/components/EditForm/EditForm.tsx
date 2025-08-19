import { Box, Typography } from '@mui/material';
import { FormInput } from '../../../../components/FormInput';
import { PrimaryButton } from '@/ui';
import { useForm } from 'react-hook-form';
import { editFormStyles } from './EditForm.styles';
import { useTranslation } from 'react-i18next';
import type {
  EditPasswordValues,
  EditUsernameValues,
} from '../../interfaces/EditFormValues.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { editPasswordValidation, editUsernameValidation } from '@/utils/validation.utils';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useUpdatePasswordMutation, useUpdateUsernameMutation } from '../../api/account.api';

export const EditForm = () => {
  const { t } = useTranslation();

  const [updateUsername, { isLoading: isUsernameLoading, error: usernameError }] =
    useUpdateUsernameMutation();
  const [updatePassword, { isLoading: isPasswordLoading, error: passwordError }] =
    useUpdatePasswordMutation();

  const {
    control: usernameControl,
    handleSubmit: handleUsernameSubmit,
    reset: usernameReset,
    formState: { errors: usernameErrors },
  } = useForm<EditUsernameValues>({
    resolver: yupResolver(editUsernameValidation(t)),
  });

  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    reset: passwordReset,
    formState: { errors: passwordErrors },
  } = useForm<EditPasswordValues>({
    resolver: yupResolver(editPasswordValidation(t)),
  });

  const onUsernameSubmit = async (data: EditUsernameValues) => {
    await updateUsername(data).unwrap();
    usernameReset();
  };

  const onPasswordSubmit = async (data: EditPasswordValues) => {
    await updatePassword(data).unwrap();
    passwordReset();
  };

  const errorMessage = ((passwordError || usernameError) as FetchBaseQueryError)?.data as {
    message?: string;
  };

  return (
    <Box sx={editFormStyles.form}>
      <Typography sx={editFormStyles.title}>{t('account.editProfile')}</Typography>
      <Box sx={editFormStyles.section}>
        <Box component="form" onSubmit={handleUsernameSubmit(onUsernameSubmit)}>
          <FormInput
            name="username"
            control={usernameControl}
            placeholder={t('placeholders.usernameNew')}
            label={t('labels.changeUsername')}
            error={!!usernameErrors.username}
            helperText={usernameErrors.username?.message}
          />
          <PrimaryButton disabled={isUsernameLoading} type="submit">
            {t('button.save')}
          </PrimaryButton>
          {usernameError && (
            <Typography sx={editFormStyles.errorMessage}>{errorMessage.message}</Typography>
          )}
        </Box>
        <Box component="form" onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
          <FormInput
            placeholder={t('placeholders.passwordOld')}
            label={t('labels.changePassword')}
            name="oldPassword"
            control={passwordControl}
            error={!!passwordErrors.oldPassword}
            helperText={passwordErrors.oldPassword?.message}
          />
          <FormInput
            placeholder={t('placeholders.passwordNew')}
            name="newPassword"
            control={passwordControl}
            error={!!passwordErrors.newPassword}
            helperText={passwordErrors.newPassword?.message}
          />
          <FormInput
            placeholder={t('placeholders.confirmPassword')}
            name="confirmPassword"
            control={passwordControl}
            error={!!passwordErrors.confirmPassword}
            helperText={passwordErrors.confirmPassword?.message}
          />
          <PrimaryButton disabled={isPasswordLoading} type="submit">
            {t('button.changePassword')}
          </PrimaryButton>
          {passwordError && (
            <Typography sx={editFormStyles.errorMessage}>{errorMessage.message}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
