import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="stretch">
          <Grid item xs={3} sm={2} md={1}>
            <Typography variant="h6" className={classes.title}>
              Portfolio
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10} md={11}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={4} sm={2}>
                <Button className={classes.button} fullWidth>
                  one
                </Button>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button className={classes.button} fullWidth>
                  two
                </Button>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button className={classes.button} fullWidth>
                  three
                </Button>
              </Grid>
              {/* <Grid item xs={3} md={2}>
                <Button className={classes.button} fullWidth>menu</Button>
                {/ * <SwipeableDrawer
                  anchor="right"
                  onOpen={handleState(true)}
                  open={state}
                  onClose={handleState(false)}
                  className={classes.drawer}
                >
                  Drawer
                </SwipeableDrawer> * /}
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
