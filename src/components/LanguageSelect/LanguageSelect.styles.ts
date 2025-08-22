import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';
export const languageSelectStyles = {
  input: {
    width: '100%',
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
    marginBottom: '10px',
  },
} satisfies SxThemeProps;
