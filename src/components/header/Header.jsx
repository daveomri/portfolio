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
import { Menu } from '@material-ui/icons';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
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
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const handleState = newState => () => {
    setState(newState);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={handleState(false)}
      onKeyDown={handleState(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3} sm={2} md={1}>
            <Typography variant="h6" className={classes.title}>
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
