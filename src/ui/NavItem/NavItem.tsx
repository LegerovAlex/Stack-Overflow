import { NavLink } from 'react-router';
import type { NavItemProps } from './NavItem.props';
import type { FC } from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { navItemStyles } from './NavItem.styles';

export const NavItem: FC<NavItemProps> = ({ to, label, icon, id }) => {
  return (
    <ListItemButton id={id} sx={navItemStyles.container} component={NavLink} to={to}>
      <ListItemIcon sx={navItemStyles}>{icon}</ListItemIcon>
      <ListItemText primary={label} slotProps={{ primary: { sx: navItemStyles.label } }} />
    </ListItemButton>
  );
};
