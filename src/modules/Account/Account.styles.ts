import type { SxThemeProps } from '@/types/sx.types';

export const accountStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    width: '100%',
  },
  title: {
    fontSize: '30px',
  },
} satisfies SxThemeProps;
