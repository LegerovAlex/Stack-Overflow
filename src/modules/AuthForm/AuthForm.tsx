import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginMutation, useRegisterMutation } from './api/auth.api';
import { useForm } from 'react-hook-form';
import type { AuthFormValues } from './interfaces/AuthFormValues.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { authValidation } from './utils/validation.utils';
import { FormInput } from '@/components';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const AuthForm: FC = () => {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);
  const [login, { error: loginError, reset: resetLogin }] = useLoginMutation();
  const [register, { error: registerError, reset: resetRegister }] = useRegisterMutation();

  const toggleAuthMode = () => {
    setIsRegister((prev) => !prev);
    reset();
    resetLogin();
    resetRegister();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: yupResolver(authValidation(t, isRegister)),
  });

  const errorMessage = ((loginError || registerError) as FetchBaseQueryError)?.data as {
    message?: string;
  };

  const onSubmit = async (data: AuthFormValues) => {
    if (isRegister) {
      await register({ username: data.username, password: data.password }).unwrap();
    } else {
      await login({ username: data.username, password: data.password }).unwrap();
    }
  };

  return (
    <Box>
      <Typography>{t(isRegister ? 'auth.registerTitle' : 'auth.loginTitle')}</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="username"
          label={t('labels.username')}
          placeholder={t('placeholders.username')}
          control={control}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <FormInput
          name="password"
          label={t('labels.password')}
          placeholder={t('placeholders.password')}
          control={control}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {isRegister && (
          <FormInput
            name="confirmPassword"
            label={t('labels.confirmPassword')}
            placeholder={t('placeholders.confirmPassword')}
            control={control}
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          {t(isRegister ? 'auth.registerTitle' : 'auth.loginTitle')}
        </Button>
      </Box>
      {(loginError || registerError) && (
        <Typography color="error" sx={{ mt: 2 }}>
          {errorMessage.message}
        </Typography>
      )}
      <Typography variant="body2" align="center">
        {t(isRegister ? 'auth.hasAccount' : 'auth.noAccount')}{' '}
        <Typography component="span" color="primary" onClick={toggleAuthMode}>
          {t(isRegister ? 'auth.loginLink' : 'auth.registerLink')}
        </Typography>
      </Typography>
    </Box>
  );
};
