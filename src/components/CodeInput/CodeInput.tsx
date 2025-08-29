import { Controller, type FieldValues } from 'react-hook-form';
import type { CodeInputProps } from './CodeInput.props';
import { useId } from 'react';
import { InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { codeInputStyles } from './CodeInput.styles';

export const CodeInput = <T extends FieldValues>({
  control,
  label,
  name,
  rules,
  placeholder,
}: CodeInputProps<T>) => {
  const id = useId();
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={codeInputStyles.container}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <TextField
            {...field}
            sx={codeInputStyles.input}
            id={id}
            placeholder={placeholder}
            multiline
            rows={10}
            error={!!error}
            helperText={error?.message}
          />
        </Box>
      )}
    />
  );
};
