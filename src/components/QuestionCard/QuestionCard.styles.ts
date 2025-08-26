import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const questionCardStyles = {
  card: {
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    maxWidth: 1000,
    width: '100%',

    '& .MuiCardHeader-content': {
      display: 'flex',
      flexDirection: 'column',
    },

    '& .MuiCardHeader-title': {
      fontSize: '18px',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: '15px',
    },
  },

  status: {
    fontSize: '14px',
    color: colors.textSecondary,
  },

  codeBlock: {
    backgroundColor: colors.inputBg,
    color: colors.textPrimary,
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '30px',
  },
} satisfies SxThemeProps;
