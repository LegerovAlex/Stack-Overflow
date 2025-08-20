import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const accountStatsStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 1000,
    width: '100%',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 3,
  },

  primaryText: {
    fontSize: '14px',
    color: colors.textSecondary,
  },
} satisfies SxThemeProps;
