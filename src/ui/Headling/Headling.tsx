import { Typography } from '@mui/material';
import { headlingStyles } from './Headling.styles';
import type { FC, PropsWithChildren } from 'react';

export const Headling: FC<PropsWithChildren> = ({ children }) => {
  return <Typography sx={headlingStyles.title}>{children}</Typography>;
};
