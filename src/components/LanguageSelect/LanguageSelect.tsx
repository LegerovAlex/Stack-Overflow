import { Controller, type FieldValues } from 'react-hook-form';
import type { LanguageSelectProps } from './LanguageSelect.props';
import { Box, InputLabel, MenuItem, TextField } from '@mui/material';
import { useId } from 'react';
import { languageSelectStyles } from './LanguageSelect.styles';

export const LanguageSelect = <T extends FieldValues>({
  control,
  label,
  name,
  rules,
  options,
}: LanguageSelectProps<T>) => {
  const id = useId();
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={languageSelectStyles.container}>
          <InputLabel sx={languageSelectStyles.label} htmlFor={id}>
            {label}
          </InputLabel>
          <TextField
            select
            id={id}
            {...field}
            value={field.value ?? ''}
            error={!!error}
            helperText={error?.message}
            disabled={!options?.length}
            sx={languageSelectStyles.input}
          >
            {options.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      )}
    />
  );
};
