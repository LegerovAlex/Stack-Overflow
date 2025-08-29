import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginMutation, useRegisterMutation } from './api/auth.api';
import { useForm } from 'react-hook-form';
import type { AuthValues } from './interfaces/AuthValues.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { authFormStyles } from './Auth.styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import { Headling, PrimaryButton } from '@/ui';
import { FormInput, SuccessSnackbar } from '@/components';
import { RoutesPaths } from '@/routes/routeesPaths';
import { authValidation } from '@/utils/validation.utils';

export const Auth: FC = () => {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const [login, { error: loginError, reset: resetLogin, isLoading: isLoginLoading }] =
    useLoginMutation();
  const [
    register,
    {
      error: registerError,
      reset: resetRegister,
      isLoading: isRegisterLoading,
      isSuccess: isRegisterSuccess,
    },
  ] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthValues>({
    resolver: yupResolver(authValidation(t, isRegister)),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      setIsRegister(false);
      setShowSuccess(true);
      reset();
      resetRegister();
      setShowPass(false);
    }
  }, [isRegisterSuccess, resetRegister, reset]);

  const toggleAuthMode = () => {
    setIsRegister((prev) => !prev);
    setShowPass(false);
    reset();
    resetLogin();
    resetRegister();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPass((prev) => !prev);
  };

  const errorMessage = ((loginError || registerError) as FetchBaseQueryError)?.data as {
    message?: string;
  };

  const onSubmit = async (data: AuthValues) => {
    if (isRegister) {
      await register({ username: data.username, password: data.password }).unwrap();
    } else {
      await login({ username: data.username, password: data.password }).unwrap();
      navigate(RoutesPaths.ROOT);
    }
  };

  return (
    <Box sx={authFormStyles.container}>
      <Headling>{t(isRegister ? 'auth.registerTitle' : 'auth.loginTitle')}</Headling>
      <Box sx={authFormStyles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
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
          type={showPass ? 'text' : 'password'}
          error={!!errors.password}
          helperText={errors.password?.message}
          endAdornment={
            <IconButton edge="end" onClick={handleTogglePasswordVisibility}>
              {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          }
        />
        {isRegister && (
          <FormInput
            name="confirmPassword"
            label={t('labels.confirmPassword')}
            placeholder={t('placeholders.confirmPassword')}
            control={control}
            type={showPass ? 'text' : 'password'}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            endAdornment={
              <IconButton edge="end" onClick={handleTogglePasswordVisibility}>
                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            }
          />
        )}
        <PrimaryButton type="submit" disabled={isLoginLoading || isRegisterLoading}>
          {t(isRegister ? 'button.register' : 'button.login')}
        </PrimaryButton>
        <SuccessSnackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          isSuccess={showSuccess}
          message={t('alert')}
        />
      </Box>
      {(loginError || registerError) && (
        <Typography sx={authFormStyles.errorMessage}>{errorMessage.message}</Typography>
      )}
      <Typography sx={authFormStyles.toggleLink}>
        {t(isRegister ? 'auth.hasAccount' : 'auth.noAccount')}{' '}
        <Typography component="span" onClick={toggleAuthMode}>
          {t(isRegister ? 'auth.loginLink' : 'auth.registerLink')}
        </Typography>
      </Typography>
    </Box>
  );
};
