import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import profile from '../../resource/images/profile1.JPEG';

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
    border: '0px solid black',
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
                    Hey and welcome to my portfolio.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    My name is <b>Dave Omrai</b> and I am graguatee of
                    <b> bachelor</b> degree program data science, and I am
                    finishing my <b>master</b> degree AI program at
                    <b>{` Faculty of
                    Information of Information Technology CTU`}</b>
                    .
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    Among my hobbies are working with <b>big data</b>,
                    understanding the information beneath it, finding better
                    ways to solve real-world problems, and designing
                    sophisticated solutions.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    Throughout my studies and projects I worked with
                    <b>
                      C, C++, Python, Java, JS, TS, PHP, React, Django, Flask,
                      Ruby, SQL, NoSQL, Assembler, and more.
                    </b>
                    I also have a backround in
                    <b> networking, soldering, repairs of all kind. </b>
                    And I am still always happy to learn new technologies.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    I am also an <b>admin and web developer</b> of{' '}
                    <b>SudetyRaport</b>, rap plug. Together with our team, we
                    build a community reaching <b>2k</b> readers and still
                    growing. Apart of this project, I am also an admin of few
                    other React/Python/WordPress projects.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    In my free time I like to <b>travel</b>, listen to{' '}
                    <b>music</b>, enjoy <b>art</b> in any form, and write{' '}
                    <b>poetry</b>. I have also already published and ilustrated
                    one poetry collection called <b>A Dimming Mind</b>.
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
