import type { HeaderProps } from './Header.props';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import { headerStyles } from './Header.styles';
import { Headling, PrimaryButton } from '@/ui';
import { useAuth } from '@/hooks/useAuth';

export const Header: FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { t } = useTranslation();

  const { handleLogout, isAuthenticated, isLoading } = useAuth();

  return (
    <AppBar position="static" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <IconButton onClick={onToggleSidebar}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Headling>{t('header.title')}</Headling>
        <PrimaryButton onClick={handleLogout} disabled={isLoading}>
          {isAuthenticated ? t('button.logout') : t('button.login')}
        </PrimaryButton>
      </Toolbar>
    </AppBar>
  );
};
