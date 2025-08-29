import { useState, type FC } from 'react';
import { Header, Sidebar } from './components';
import { Outlet } from 'react-router';
import { Box } from '@mui/system';
import { mainLayoutStyles } from './MainLayout.styles';

export const MainLayout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <Box sx={mainLayoutStyles.root}>
      <Header onToggleSidebar={toggleSidebar} />
      <Box sx={mainLayoutStyles.contentWrapper}>
        <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
        <Box component="main" sx={mainLayoutStyles.main}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
