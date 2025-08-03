// ui/InputField.tsx
import { Box, InputAdornment, InputLabel, TextField } from '@mui/material';
import { forwardRef, useId } from 'react';
import type { InputFieldProps } from './InputField.props';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, placeholder, startAdornment, endAdornment, error, helperText, value, ...rest },
    ref,
  ) => {
    const id = useId();

    return (
      <Box>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <TextField
          id={id}
          inputRef={ref}
          error={error}
          value={value ?? ''}
          helperText={helperText}
          placeholder={placeholder}
          slotProps={{
            input: {
              startAdornment: startAdornment && (
                <InputAdornment position="start">{startAdornment}</InputAdornment>
              ),
              endAdornment: endAdornment && (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ),
            },
          }}
          {...rest}
        />
      </Box>
    );
  },
);
