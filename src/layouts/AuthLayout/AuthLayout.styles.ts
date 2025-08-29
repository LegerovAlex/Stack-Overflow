import type { SxThemeProps } from '@/types/sx.types';
import { backgroundAuth } from '@/static';
import { colors } from '@/styles/colors.styles';

export const authLayoutStyles = {
  container: {
    height: '100vh',
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 4,
  },
  rightSide: {
    backgroundImage: `url(${backgroundAuth})`,
    backgroundSize: 'cover',
  },
} satisfies SxThemeProps;
