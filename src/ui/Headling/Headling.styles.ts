import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const headlingStyles = {
  title: {
    color: colors.textPrimary,
    fontSize: '35px',
    fontWeight: 700,
    lineHeight: '32px',
  },
} satisfies SxThemeProps;
