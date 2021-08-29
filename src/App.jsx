import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Box } from '@material-ui/core';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const useStyles = makeStyles(() => ({
  content: {
    minHeight: '100vh',
    backgroundColor: '#462f',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Header classes={classes.header} />
      <Box className={classes.content}>content</Box>
      <Footer classes={classes.footer} />
    </Paper>
  );
};

export default App;
