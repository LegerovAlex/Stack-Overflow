import type { SxThemeProps } from '@/types/sx.types';

export const mainLayoutStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  contentWrapper: {
    display: 'flex',
    flex: 1,
  },

  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    overflow: 'auto',
  },
} satisfies SxThemeProps;
