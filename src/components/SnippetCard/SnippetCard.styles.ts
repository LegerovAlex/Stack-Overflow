import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const snippetCardStyles = {
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
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    '& .MuiCardHeader-title': {
      fontSize: '18px',
    },
    '& .MuiCardHeader-subheader': {
      fontSize: '15px',
    },
  },
  codeBlock: {
    backgroundColor: colors.inputBg,
    color: colors.textPrimary,
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  actionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
} satisfies SxThemeProps;
