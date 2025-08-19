import { Box, Drawer, IconButton, Typography } from '@mui/material';

import { navItems } from '@/consts/nav.consts';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavList } from '@/components';
import type { SidebarProps } from './Sidebar.props';
import type { FC } from 'react';
import { sidebarStyles } from './Sidebar.styles';
import type { AppState } from '@/types/store.types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Sidebar: FC<SidebarProps> = ({ onClose, open }) => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useSelector((state: AppState) => state.auth);

  return (
    <Drawer open={open} anchor="left" variant="persistent" sx={sidebarStyles.drawer}>
      <Box>
        <Box sx={sidebarStyles.header}>
          <Typography sx={sidebarStyles.profile}>
            {isAuthenticated && user ? user.username : t('account.notLoggedIn')}
          </Typography>
          <IconButton onClick={onClose} sx={sidebarStyles.iconButton}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Box>
        <NavList items={navItems} />
      </Box>
    </Drawer>
  );
};
