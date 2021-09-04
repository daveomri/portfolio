import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
  },
}));

const Greetings = () => {
  const classes = useStyles();

  return (
    <Card>
       <Grid container justifyContent="center" alignItems="center" className={classes.root}>
            <Grid item xs={12} sm={4}>pic</Grid>
            <Grid item xs={12} sm={8}>text</Grid>
       </Grid>
    </Card>
  );
};

export default Greetings;
