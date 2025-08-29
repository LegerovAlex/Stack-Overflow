import { CircularProgress, Box } from '@mui/material';
import { spinnerStyles } from './Spiner.styles';
import type { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <Box sx={spinnerStyles.continer}>
      <CircularProgress sx={spinnerStyles.spinner} />
    </Box>
  );
};
