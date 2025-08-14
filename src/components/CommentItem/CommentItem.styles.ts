import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const commentItemStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 1000,
    width: '100%',
  },

  user: {
    fontSize: '15px',
    color: colors.textSecondary,
  },
  content: {
    color: colors.textPrimary,
    fontSize: '14px',
  },
} satisfies SxThemeProps;
