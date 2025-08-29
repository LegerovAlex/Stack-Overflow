import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const navItemStyles = {
  container: {
    width: '100%',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    color: colors.textWhite,
    gap: '12px',
    transition: 'background-color 0.2s, color 0.2s',
    '&:hover': {
      backgroundColor: colors.backgroundBlackHover,
      color: colors.textWhiteHover,
    },
    '&.active': {
      backgroundColor: colors.backgroundBlackHover,
      color: colors.textWhiteHover,
    },
  },
  icon: {
    color: 'inherit',
  },
  label: {
    fontSize: '15px',
    fontWeight: 500,
  },
} satisfies SxThemeProps;
