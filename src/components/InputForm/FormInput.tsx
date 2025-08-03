import { InputField } from '@/ui';
import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import type { FormInputProps } from './FormInput.props';

export const FormInput: FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  control,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  return (
    <Controller
      name={name}
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
