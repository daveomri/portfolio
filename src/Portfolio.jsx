import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Greetings from './components/cards/Greetings';
import Skills from './components/cards/Skills';
import Projects from './components/cards/Projects';

const useStyles = makeStyles(() => ({}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Greetings id="about_me" />
      <Skills id="skills" />
      <Projects id="projects" />
    </Box>
  );
};

Portfolio.displayName = 'Portfolio';

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
