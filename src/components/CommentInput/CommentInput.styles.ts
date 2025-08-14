import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const commentInputStyles = {
  form: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    maxWidth: 1000,
    width: '100%',
  },

  input: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: '8px',
    '.MuiOutlinedInput-root': {
      borderRadius: '10px',
      transition: 'border-color 0.2s',
      '&.Mui-focused fieldset': {
        borderColor: colors.borderFocus,
        borderWidth: '1px',
      },
    },
  },

  button: {
    backgroundColor: colors.btnBackgroundDefault,
    color: colors.btnText,
    borderRadius: '4px',
    padding: '10px',
    '&:hover': {
      backgroundColor: colors.btnBackgroundHover,
    },
    '&:active': {
      backgroundColor: colors.btnBackgroundActive,
    },
  },
} satisfies SxThemeProps;
