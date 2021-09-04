import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import profile from '../../resource/images/profile.png';

import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
  },
  profilePic: {
    minWidth: '250px',
    width: '25vw',
    borderRadius: '100vw',
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
        spacing={1}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={5}>
              <Grid container justifyContent="center" alignItems="center">
                <img src={profile} alt="Logo" className={classes.profilePic} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Grid container justifyContent="center" alignItems="center">
                <Typography variant="body1">text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Greetings;
