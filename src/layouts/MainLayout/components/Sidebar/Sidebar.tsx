import { Box, Drawer, IconButton, Typography } from '@mui/material';

import { navItems } from '@/consts/nav.consts';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavList } from '@/components';
import type { SidebarProps } from './Sidebar.props';
import type { FC } from 'react';
import { sidebarStyles } from './Sidebar.styles';

export const Sidebar: FC<SidebarProps> = ({ onClose, open }) => {
  return (
    <Drawer open={open} anchor="left" variant="persistent" sx={sidebarStyles.drawer}>
      <Box>
        <Box sx={sidebarStyles.header}>
          <Typography sx={sidebarStyles.profile}>Profile</Typography>
          <IconButton onClick={onClose} sx={sidebarStyles.iconButton}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Box>
        <NavList items={navItems} />
      </Box>
    </Drawer>
  );
};
