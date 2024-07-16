import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import srlogo from '../../resource/images/SR.png';

import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    borderTop: '1px dashed #bbcfc2',
  },
  srPic: {
    minWidth: '200px',
    width: '20vw',
    borderRadius: '100vw',
    height: 'auto',
    border: '0px solid black',
  },
  projText: {
    textAlign: 'center',
  },
}));

const Projects = (props) => {
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
            <Grid item xs={12} sm={12} md={12}>
              <Grid container justifyContent="center" alignItems="center">
                <img
                  src={srlogo}
                  alt="Sudety Raport logo"
                  className={classes.srPic}
                />
              </Grid>
            </Grid>
            <Grid item xs={11} sm={9} md={12}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.projText}>
                    I am also an <b>admin and web developer</b> of{' '}
                    <b>
                      <a
                        href="//www.sudetyraport.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SudetyRaport
                      </a>
                    </b>
                    , rap plug. With our team we are supporting a community of
                    <b> over 2,000 readers</b> by providing a platform for
                    insightful articles articles on{' '}
                    <i>
                      socio-cultural issues and art-related themes within the
                      rap music industry
                    </i>
                    . Apart from this project, I am also an admin of few other
                    other React/Python/WordPress projects.
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

Projects.displayName = 'Projects';

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

Projects.defaultProps = {};

export default Projects;
