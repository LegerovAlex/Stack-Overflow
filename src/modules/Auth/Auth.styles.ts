import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const authFormStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    padding: '32px',
    minWidth: '50%',
    backgroundColor: colors.background,
    borderRadius: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
  },
  errorMessage: {
    color: colors.error,
    fontSize: '15px',
  },
  toggleLink: {
    color: colors.textPrimary,
    fontSize: '14px',
    textAlign: 'center',
    '& > span': {
      color: colors.textSecondary,
      cursor: 'pointer',
      textDecoration: 'underline',
      '&:hover': {
        color: colors.textPrimary,
      },
    },
  },
} satisfies SxThemeProps;
