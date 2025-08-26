import { InputField } from '@/ui';
import { Controller, type FieldValues } from 'react-hook-form';
import type { FormInputProps } from './FormInput.props';

export const FormInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  startAdornment,
  rules,
  endAdornment,
  ...rest
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputField
          {...field}
          {...rest}
          ref={field.ref}
          helperText={error?.message ?? ''}
          error={!!error}
          label={label}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
      )}
    />
  );
};
