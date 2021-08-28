import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Box } from '@material-ui/core';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    display: 'block',
    backgroundColor: '#e55',
    [theme.breakpoints.up('xs')]: {
      width: '75vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '50vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  content: {
    height: '100vh',
    backgroundColor: '#462f',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Header classes={classes.header} />
      <Box className={classes.content}>content</Box>
      <Footer classes={classes.footer} />
    </Paper>
  );
};

export default App;
