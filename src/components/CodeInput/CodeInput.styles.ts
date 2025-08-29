import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const codeInputStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  input: {
    borderRadius: '8px',
    '.MuiInputBase-root': {
      backgroundColor: colors.inputBg,
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '10px',
      transition: 'border-color 0.2s',
      '&.Mui-focused fieldset': {
        borderColor: colors.borderFocus,
        borderWidth: '1px',
      },
    },
  },
} satisfies SxThemeProps;
