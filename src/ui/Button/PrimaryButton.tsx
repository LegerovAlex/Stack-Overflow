import type { FC } from 'react';
import { Button } from '@mui/material';
import type { PrimaryButtonProps } from './PrimaryButton.props';
import { buttonPrimaryStyles } from './PrimaryButton.styles';

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, ...rest }) => {
  return (
    <Button sx={buttonPrimaryStyles.button} {...rest}>
      {children}
    </Button>
  );
};
