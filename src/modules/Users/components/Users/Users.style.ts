import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const usersStyles = {
  title: {
    fontSize: '30px',
    marginBottom: '30px',
    fontWeight: 700,
    color: colors.textPrimary,
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
} satisfies SxThemeProps;
