import { NAME_REGEXP, PASSWORD_REGEXP } from '@/consts/regexps.consts';
import type { TFunction } from 'i18next';
import * as yup from 'yup';
import type { AuthFormValues } from '../interfaces/AuthFormValues.interface';

export function minMaxFieldValidation(
  t: TFunction,
  minValue: number,
  maxValue: number,
): yup.StringSchema {
  return yup
    .string()
    .required(t('auth.errors.required'))
    .min(minValue, t('auth.errors.minLength', { count: minValue }))
    .max(maxValue, t('auth.errors.maxLength', { count: maxValue }));
}

export function userNameValidation(t: TFunction, minValue = 5, maxValue = 32): yup.StringSchema {
  return minMaxFieldValidation(t, minValue, maxValue).matches(
    NAME_REGEXP,
    t('auth.errors.usernameInvalid'),
  );
}

export function passwordValidation(t: TFunction, minValue = 8, maxValue = 30): yup.StringSchema {
  return minMaxFieldValidation(t, minValue, maxValue).matches(
    PASSWORD_REGEXP,
    t('auth.errors.passwordInvalid'),
  );
}

export function confirmPasswordValidation(t: TFunction): yup.StringSchema<string> {
  return yup
    .string()
    .required(t('auth.errors.confirmPasswordRequired'))
    .oneOf([yup.ref('password')], t('auth.errors.confirmPasswordMismatch'));
}

export function authValidation(t: TFunction, isRegister = false): yup.ObjectSchema<AuthFormValues> {
  return yup
    .object({
      username: userNameValidation(t),
      password: passwordValidation(t),
      ...(isRegister ? { confirmPassword: confirmPasswordValidation(t) } : {}),
    })
    .defined() as yup.ObjectSchema<AuthFormValues>;
}
