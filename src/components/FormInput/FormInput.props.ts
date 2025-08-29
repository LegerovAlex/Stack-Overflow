import type { InputFieldProps } from '@/ui/InputField/InputField.props';
import type { ReactElement } from 'react';
import type { Control, FieldPath, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface FormInputProps<T extends FieldValues> extends Omit<InputFieldProps, 'name'> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  rules?: RegisterOptions<T, Path<T>>;
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
}
