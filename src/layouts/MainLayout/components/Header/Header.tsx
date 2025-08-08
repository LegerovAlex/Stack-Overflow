import type { HeaderProps } from './Header.props';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import { LogoutButton } from '@/modules';
import { headerStyles } from './Header.styles';
import { Headling } from '@/ui';

export const Header: FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <IconButton onClick={onToggleSidebar}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Headling>{t('header.title')}</Headling>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
