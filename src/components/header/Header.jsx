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
import { Link } from 'react-scroll';
import { Menu } from '@material-ui/icons';

import LinkIcon from '@material-ui/icons/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: '#000',
    backgroundColor: '#fff',
    borderBottom: '1px solid #838789',
    boxShadow: 'none',
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: 'auto',
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
}));

const drawerItems = [{
  key: 'about_me',
  text: 'About me',
  icon: <AccountCircleIcon />,
}];

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

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
        {['Links'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerItems.map((drawerItem) => (
          <Link to={drawerItem.key} onClick={handleState(false)} smooth>
            <ListItem button key={drawerItem.key}>
              <ListItemIcon>
                {drawerItem.icon}
              </ListItemIcon>
              <ListItemText primary={drawerItem.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3} sm={2} md={1}>
            <Typography variant="h5" className={classes.title}>
              Portfolio
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
