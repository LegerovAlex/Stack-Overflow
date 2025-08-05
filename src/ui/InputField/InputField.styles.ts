import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const inputFieldStyles = {
  input: {
    width: '300px',
    marginBottom: '16px',
    '.MuiOutlinedInput-root': {
      backgroundColor: colors.inputBg,
      borderRadius: '10px',
      transition: 'border-color 0.2s',
      '& fieldset': {
        borderColor: colors.border,
      },
      '&:hover fieldset': {
        borderColor: colors.borderHover,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.borderFocus,
        borderWidth: '1px',
      },
    },
    '.MuiInputBase-input': {
      padding: '12px 14px',
      fontSize: '14px',
      color: colors.textPrimary,
      '::placeholder': {
        color: colors.placeholder,
        opacity: 1,
      },
    },
    '.MuiInputAdornment-root': {
      color: colors.adornment,
    },
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    color: colors.label,
    fontWeight: 500,
  },
} satisfies SxThemeProps;
