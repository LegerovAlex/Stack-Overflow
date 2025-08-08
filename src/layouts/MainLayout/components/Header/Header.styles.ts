import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const headerStyles = {
  appBar: {
    backgroundColor: colors.background,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    '&:hover': {
      backgroundColor: colors.backgroundBlackHover,
      color: colors.textPrimary,
    },
  },
} satisfies SxThemeProps;
