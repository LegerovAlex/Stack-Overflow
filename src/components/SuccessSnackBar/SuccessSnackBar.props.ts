import type { SnackbarOrigin } from '@mui/material';

export interface SuccessSnackbarProps {
  isSuccess?: boolean;
  message?: string;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
}
