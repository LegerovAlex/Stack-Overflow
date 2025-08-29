import { useEffect, useState, type FC } from 'react';
import { Snackbar, Alert } from '@mui/material';
import type { SuccessSnackbarProps } from './SuccessSnackBar.props';
import { successSnackBarStyles } from './SuccessSnackBar.styles';

export const SuccessSnackbar: FC<SuccessSnackbarProps> = ({
  isSuccess,
  message,
  autoHideDuration = 3000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) setOpen(true);
  }, [isSuccess]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
    >
      <Alert severity="success" variant="outlined" sx={successSnackBarStyles.alert}>
        {message}
      </Alert>
    </Snackbar>
  );
};
