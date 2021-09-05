import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

const Links = () => {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      <div />
    </Box>
  );
};

Links.displayName = 'Links';

Links.propTypes = {};

Links.defaultProps = {};

export default Links;
