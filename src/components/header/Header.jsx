import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  List,
  SwipeableDrawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LinkIcon from '@mui/icons-material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import CodeIcon from '@mui/icons-material/Code';
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupsIcon from '@mui/icons-material/Groups';

import { colors } from '../../theme';
import scrollToSection from '../../scrollToSection';

const appBarSx = {
  color: colors.ink,
  backgroundColor: colors.sage,
  borderBottom: `1px solid ${colors.sage}`,
  boxShadow: 'none',
};

const drawerSx = {
  backgroundColor: colors.cream,
  width: (theme) => theme.spacing(26),
  p: 2,
};

const navLinkSx = { textDecoration: 'none', color: '#000' };

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
  const location = useLocation();

  const pathKey = pathToKey[location.pathname] || 'portfolio';

  const toggleDrawer = (nextOpen) => () => setOpen(nextOpen);

  const list = () => (
    <div role="presentation">
      <List>
        {drawerKeys.map((key) => (
          <RouterLink
            to={appComponents[key].path}
            style={navLinkSx}
            key={key}
            onClick={toggleDrawer(false)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{appComponents[key].icon}</ListItemIcon>
                <ListItemText primary={appComponents[key].text} />
              </ListItemButton>
            </ListItem>
          </RouterLink>
        ))}
      </List>
      <Divider />
      {appComponents[pathKey] && (
        <List>
          {appComponents[pathKey].items.map((drawerItem) => (
            <ListItem disablePadding key={drawerItem.key}>
              <ListItemButton
                onClick={() => {
                  toggleDrawer(false)();
                  scrollToSection(drawerItem.key);
                }}
              >
                <ListItemIcon>{drawerItem.icon}</ListItemIcon>
                <ListItemText primary={drawerItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );

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
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                onOpen={toggleDrawer(true)}
                open={open}
                onClose={toggleDrawer(false)}
                slotProps={{ paper: { sx: drawerSx } }}
              >
                {list()}
              </SwipeableDrawer>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = 'Header';

export default Header;
