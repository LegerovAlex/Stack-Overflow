import type { TextFieldProps } from '@mui/material';
import type { ReactElement } from 'react';

export interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  endAdornment?: ReactElement;
  startAdornment?: ReactElement;
  placeholder: string;
}
