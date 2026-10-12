import { lazy, Suspense, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LinkIcon from '@mui/icons-material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import CodeIcon from '@mui/icons-material/Code';
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupsIcon from '@mui/icons-material/Groups';

import { colors } from '../../theme';

const HeaderDrawer = lazy(() => import('./HeaderDrawer'));

const appBarSx = {
  color: colors.ink,
  backgroundColor: colors.sage,
  borderBottom: `1px solid ${colors.sage}`,
  boxShadow: 'none',
};

const drawerKeys = ['portfolio', 'links'];

const pathToKey = {
  '/': 'portfolio',
  '/links': 'links',
};

const appComponents = {
  portfolio: {
    key: 'portfolio',
    text: 'Portfolio',
    icon: <PortraitSharpIcon />,
    path: '/',
    items: [
      {
        key: 'about_me',
        text: 'About me',
        icon: <AccountCircleIcon />,
      },
      {
        key: 'skills',
        text: 'My skills',
        icon: <CodeIcon />,
      },
      {
        key: 'projects',
        text: 'My projects',
        icon: <PieChartIcon />,
      },
      {
        key: 'community',
        text: 'Community',
        icon: <GroupsIcon />,
      },
    ],
  },
  links: {
    key: 'links',
    text: 'Links',
    icon: <LinkIcon />,
    path: '/links',
    items: [],
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const location = useLocation();

  const pathKey = pathToKey[location.pathname] || 'portfolio';

  useEffect(() => {
    const mount = () => setDrawerMounted(true);
    // Safari has no requestIdleCallback.
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(mount, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(mount, 2000);
    return () => clearTimeout(id);
  }, []);

  const openDrawer = () => {
    setDrawerMounted(true);
    setOpen(true);
  };
  const closeDrawer = () => setOpen(false);

  return (
    <AppBar position="fixed" sx={appBarSx}>
      <Toolbar sx={{ minHeight: '4em' }}>
        <Grid container alignItems="center" sx={{ width: '100%' }}>
          <Grid size={{ xs: 3, sm: 2, md: 1 }}>
            <Typography variant="h5" sx={{ fontFamily: 'GOGOIA-Deco' }}>
              {appComponents[pathKey]
                ? appComponents[pathKey].text
                : 'Error 404'}
            </Typography>
          </Grid>
          <Grid size={{ xs: 9, sm: 10, md: 11 }}>
            <Grid container justifyContent="flex-end">
              <IconButton
                sx={{ color: colors.ink, mx: 1 }}
                aria-label="menu"
                onClick={openDrawer}
              >
                <MenuIcon />
              </IconButton>
              {drawerMounted && (
                <Suspense fallback={null}>
                  <HeaderDrawer
                    open={open}
                    onOpen={openDrawer}
                    onClose={closeDrawer}
                    pages={appComponents}
                    pageKeys={drawerKeys}
                    current={appComponents[pathKey]}
                  />
                </Suspense>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = 'Header';

export default Header;
