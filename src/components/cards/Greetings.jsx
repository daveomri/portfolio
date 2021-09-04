import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import profile from '../../resource/images/profile.png';

import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
  },
  profilePic: {
    minWidth: '250px',
    width: '25vw',
    borderRadius: '25vw',
    height: 'auto',
  },
}));

const Greetings = () => {
  const classes = useStyles();

  return (
    <Card>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}
        spacing={7}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Grid container justifyContent="center" alignItems="center">
            <img src={profile} alt="Logo" className={classes.profilePic} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>text</Grid>
      </Grid>
    </Card>
  );
};

export default Greetings;
