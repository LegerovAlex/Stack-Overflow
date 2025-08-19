import { NAME_REGEXP, PASSWORD_REGEXP } from '@/consts/regexps.consts';
import type { TFunction } from 'i18next';
import * as yup from 'yup';
import type { AuthValues } from '../modules/Auth/interfaces/AuthValues.interface';
import type {
  EditPasswordValues,
  EditUsernameValues,
} from '@/modules/Account/interfaces/EditFormValues.interface';

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

export function confirmPasswordValidation(t: TFunction, refField: string = 'password') {
  return yup
    .string()
    .required(t('auth.errors.confirmPasswordRequired'))
    .oneOf([yup.ref(refField)], t('auth.errors.confirmPasswordMismatch'));
}

export function authValidation(t: TFunction, isRegister = false): yup.ObjectSchema<AuthValues> {
  return yup
    .object({
      username: userNameValidation(t),
      password: passwordValidation(t),
      ...(isRegister ? { confirmPassword: confirmPasswordValidation(t, 'password') } : {}),
    })
    .defined() as yup.ObjectSchema<AuthValues>;
}

export function editUsernameValidation(t: TFunction) {
  return yup
    .object({
      username: userNameValidation(t),
    })
    .defined() as yup.ObjectSchema<EditUsernameValues>;
}

export function editPasswordValidation(t: TFunction) {
  return yup
    .object({
      oldPassword: passwordValidation(t),
      newPassword: passwordValidation(t),
      confirmPassword: confirmPasswordValidation(t, 'newPassword'),
    })
    .defined() as yup.ObjectSchema<EditPasswordValues>;
}
