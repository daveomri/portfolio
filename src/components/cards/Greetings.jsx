import React from 'react';
import PropTypes from 'prop-types';
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

const Greetings = (props) => {
  const classes = useStyles();
  const { id } = props;
  return (
    <Card id={id}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={5}>
              <Grid container justifyContent="center" alignItems="center">
                <img src={profile} alt="Logo" className={classes.profilePic} />
              </Grid>
            </Grid>
            <Grid item xs={11} sm={9} md={7}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    Hey and welcome on my portfolio.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    My name is <b>Dave Omrai</b> and I am fresh graguatee of
                    <b> bachelor</b> degree program data science at
                    <b>{` Faculty of
                    Information of Information Technology CTU`}</b>
                    .
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    Among my dearest hobbies are working with <b>big data</b>,
                    understanding problems, searching for the best solutions and
                    <b> building websites</b>.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    In my free time I like to travel, listen to <b>music</b> and
                    enjoy <b>art</b> in any form.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

Greetings.displayName = 'Greetings';

Greetings.propTypes = {
  id: PropTypes.string.isRequired,
};

Greetings.defaultProps = {};

export default Greetings;
