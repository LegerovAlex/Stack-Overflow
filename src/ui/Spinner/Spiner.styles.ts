import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const spinnerStyles = {
  continer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.background,
  },
  spinner: {
    color: colors.btnBackgroundDefault,
    size: 60,
    thickness: 4,
  },
} satisfies SxThemeProps;
