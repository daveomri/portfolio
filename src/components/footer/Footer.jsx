import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Header = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} md={4}>
        <Grid container>
          <Grid item xs={12}>
            logo
          </Grid>
          <Grid item xs={12}>
            some info
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4}>
        <Grid container>
          <Grid item xs={12}>
            name
          </Grid>
          <Grid item xs={12}>
            some info
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4}>
        <Grid container>
          <Grid item xs={12}>
            name
          </Grid>
          <Grid item xs={12}>
            some info
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid>my name and who created it</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  classes: PropTypes.object,
};

Header.defaultProps = {
  classes: {},
};

export default Header;
