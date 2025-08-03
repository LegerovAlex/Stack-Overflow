import type { InputFieldProps } from '@/ui/InputField/InputField.props';
import type { ReactElement } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface FormInputProps extends Omit<InputFieldProps, 'name'> {
  name: FieldPath<FieldValues>;
  control: Control<FieldValues>;
  label?: string;
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
}
