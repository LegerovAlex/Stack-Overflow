import type { SxThemeProps } from '@/types/sx.types';
import { backgroundAuth } from '@/static';

export const authLayoutStyles = {
  container: {
    height: '100vh',
  },
  leftSide: {
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  rightSide: {
    backgroundImage: `url(${backgroundAuth})`,
    backgroundSize: 'cover',
  },
} satisfies SxThemeProps;
