import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Box } from '@material-ui/core';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const useStyles = makeStyles(() => ({
  content: {},
  paper: {
    minHeight: '100vh',
    backgroundColor: '#F2F3F3',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Header classes={classes.header} />
        <Box className={classes.content}>content</Box>
      </Paper>
      <Footer classes={classes.footer} />
    </div>
  );
};

export default App;
