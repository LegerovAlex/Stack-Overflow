import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const editFormStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 800,
    width: '100%',
  },

  title: {
    fontSize: '20px',
    color: colors.textSecondary,
    marginBottom: '20px',
  },

  section: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
  },

  errorMessage: {
    color: colors.error,
    fontSize: '15px',
    marginTop: '15px',
    textAlign: 'center',
  },
} satisfies SxThemeProps;
