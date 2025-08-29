import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const questionFormStyles = {
  component: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1000,
    width: '100%',
  },

  title: {
    fontSize: '30px',
    marginBottom: '30px',
    fontWeight: 700,
    color: colors.textSecondary,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  },
  errorMessage: {
    color: colors.error,
    fontSize: '15px',
  },
} satisfies SxThemeProps;
