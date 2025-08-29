import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const userCardStyles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: 2,
    padding: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 1000,
    width: '100%',
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  content: {
    '& .MuiTypography-root': {
      fontSize: '20px',
    },
  },

  username: {},
} satisfies SxThemeProps;
