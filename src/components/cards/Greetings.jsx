import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import profile from '../../resource/images/profile.png';

import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
  },
  profilePic: {
    minWidth: '200px',
    width: '20vw',
    borderRadius: '100vw',
    height: 'auto',
    border: '1px solid black',
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
      >
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={5}>
              <Grid container justifyContent="center" alignItems="center">
                <img src={profile} alt="Logo" className={classes.profilePic} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Grid container justifyContent="center" alignItems="center">
                <Typography variant="body1" className={classes.typeWriter}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Duis viverra diam non justo. Duis risus. Duis viverra diam
                  non justo. Praesent dapibus. Sed ac dolor sit amet purus
                  malesuada congue. Suspendisse nisl. Curabitur ligula sapien,
                  pulvinar a vestibulum quis, facilisis vel sapien. In rutrum.
                  Integer pellentesque quam vel velit. Aenean id metus id velit
                  ullamcorper pulvinar. Integer lacinia. Vivamus ac leo pretium
                  faucibus. Cras pede libero, dapibus nec, pretium sit amet, tempor
                  quis. Nunc tincidunt ante vitae massa. Et harum quidem rerum
                  facilis est et expedita distinctio. Nullam justo enim,
                  consectetuer nec, ullamcorper ac, vestibulum in, elit.

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Greetings;
