import { colors } from '@/styles/colors.styles';
import type { SxThemeProps } from '@/types/sx.types';

export const successSnackBarStyles = {
  alert: {
    width: '100%',
    bgcolor: colors.backgroundBlack,
    color: colors.textWhite,
    borderColor: colors.borderBlack,
    '& .MuiAlert-icon': {
      color: colors.textWhite,
    },
  },
} satisfies SxThemeProps;
