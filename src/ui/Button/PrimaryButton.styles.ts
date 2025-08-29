import { colors } from '@/styles/colors.styles';

export const buttonPrimaryStyles = {
  button: {
    backgroundColor: colors.btnBackgroundDefault,
    color: colors.btnText,
    border: `1px solid ${colors.btnBorder}`,
    borderRadius: '10px',
    padding: '7px 10px',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    minWidth: '140px',
    maxWidth: '200px',
    '&:hover': {
      backgroundColor: colors.btnBackgroundHover,
      borderColor: colors.btnBorderHover,
    },
    '&:active': {
      backgroundColor: colors.btnBackgroundActive,
    },
    '&:disabled': {
      backgroundColor: colors.btnDisabledBackground,
      color: colors.btnDisabledText,
      borderColor: colors.btnDisabledBackground,
    },
  },
};
