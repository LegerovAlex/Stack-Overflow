import type { SxThemeProps } from '@/types/sx.types';

export const snippetActionsStyle = {
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
