import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const usersListStyles = {
  container: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },

  card: {
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 700,
    width: '100%',

    '& .MuiCardContent-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  username: {
    fontSize: '20px',
  },
  role: {
    fontSize: '17px',
    color: colors.textSecondary,
  },
  id: {
    fontSize: '17px',
    color: colors.textSecondary,
  },
} satisfies SxThemeProps;
