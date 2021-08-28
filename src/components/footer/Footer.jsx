import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes}>
      <Grid item xs={6} md={4}>
        First item
      </Grid>
      <Grid item xs={6} md={4}>
        Second item
      </Grid>
      <Grid item xs={6} md={4}>
        Third item
      </Grid>
    </Grid>
  );
};

export default Header;
