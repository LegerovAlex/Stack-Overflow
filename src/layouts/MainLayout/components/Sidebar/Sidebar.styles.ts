import type { SxThemeProps } from '@/types/sx.types';
import { colors } from '@/styles/colors.styles';

export const sidebarStyles = {
  drawer: {
    '& .MuiPaper-root': {
      backgroundColor: colors.backgroundBlack,
      width: '15%',
      minWidth: '240px',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px',
  },
  profile: {
    fontSize: '20px',
    color: colors.textWhite,
  },
  iconButton: {
    color: colors.textWhite,
    '&:hover': {
      backgroundColor: colors.backgroundBlackHover,
      color: colors.textWhiteHover,
    },
  },
} satisfies SxThemeProps;
