import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    borderTop: '1px dashed #bbcfc2',
  },
  skillsText: {
    marginTop: '3em',
  },
}));

const Skills = (props) => {
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
                <Typography variant="h1" className="skillsCode">
                  {'< >'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={12} className="skillsText">
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="body1" className={classes.typeWriter}>
                    Throughout my studies and projects I worked with{' '}
                    <b>
                      C, C++, Python(PyTorch, TensorFlow...), Java, JS, TS, PHP,
                      React, Django, CSS, Node, Flask, Ruby, SQL, NoSQL, Git,
                      Bash, OpenMP, MPI, Basic, CI/CD, Jest, Unit Testing, OPP,
                      FP, Data Mining, Machine Learning, Frontend, Backend,
                      Full-Stack.{' '}
                    </b>
                    <i>
                      I also have a backround in
                      <b> networking, soldering, repairs of all kind. </b>
                      And I am always happy to learn new things.
                    </i>
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

Skills.displayName = 'Skills';

Skills.propTypes = {
  id: PropTypes.string.isRequired,
};

Skills.defaultProps = {};

export default Skills;
