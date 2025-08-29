import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const snippetStyles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  errorMessage: {
    color: colors.error,
    fontSize: '15px',
  },
} satisfies SxThemeProps;
