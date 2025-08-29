import { authLayoutStyles } from './AuthLayout.styles';
import type { FC } from 'react';
import type { AuthLayoutProps } from './AuthLayout.props';
import { Grid } from '@mui/material';

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid container sx={authLayoutStyles.container}>
      <Grid size={6} sx={authLayoutStyles.leftSide}>
        {children}
      </Grid>
      <Grid size={6} sx={authLayoutStyles.rightSide} />
    </Grid>
  );
};
