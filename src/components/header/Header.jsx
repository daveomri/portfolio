import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link as AppLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Menu } from '@material-ui/icons';

import LinkIcon from '@material-ui/icons/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PortraitSharpIcon from '@material-ui/icons/PortraitSharp';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: '#0e1111',
    backgroundColor: '#D9E4DD',
    borderBottom: '1px solid #D9E4DD',
    boxShadow: 'none',
  },
  button: {
    color: '#0e1111',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  drawer: {
    backgroundColor: '#FBF7F0',
    width: theme.spacing(26),
    padding: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  title: {
    fontFamily: 'GOGOIA-Deco',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
}));

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
  const classes = useStyles();
  const [state, setState] = useState(false);

  const pathName = window.location.hash.substring(1);
  const pathKey = pathToKey[`${pathName}`]
    ? pathToKey[`${pathName}`]
    : 'portfolio';

  const handleState = (newState) => () => {
    setState(newState);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={handleState(false)}
      onKeyDown={handleState(false)}
    >
      <List>
        {drawerKeys.map((key) => (
          <AppLink
            to={appComponents[key].path}
            className={classes.link}
            key={key}
          >
            <ListItem button>
              <ListItemIcon>{appComponents[key].icon}</ListItemIcon>
              <ListItemText primary={appComponents[key].text} />
            </ListItem>
          </AppLink>
        ))}
      </List>
      <Divider />
      {appComponents[pathKey] && (
        <List>
          {appComponents[pathKey].items.map((drawerItem) => (
            <Link
              to={drawerItem.key}
              onClick={handleState(false)}
              smooth
              className={classes.link}
              key={drawerItem.key}
            >
              <ListItem button>
                <ListItemIcon>{drawerItem.icon}</ListItemIcon>
                <ListItemText primary={drawerItem.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3} sm={2} md={1}>
            <Typography variant="h5" className={classes.title}>
              {appComponents[pathKey]
                ? appComponents[pathKey].text
                : 'Error 404'}
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={11}>
            <Grid container justifyContent="flex-end">
              <IconButton
                className={classes.button}
                aria-label="menu"
                onClick={handleState(true)}
              >
                <Menu />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                onOpen={handleState(true)}
                open={state}
                onClose={handleState(false)}
                classes={{ paper: classes.drawer }}
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

export default Header;
