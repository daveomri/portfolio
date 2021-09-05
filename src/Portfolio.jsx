import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Greetings from './components/cards/Greetings';

const useStyles = makeStyles(() => ({}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <Greetings id="about_me" />
    </Box>
  );
};

Portfolio.displayName = 'Portfolio';

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
