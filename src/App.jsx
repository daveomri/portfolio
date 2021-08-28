import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import Header from './components/header/Header';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    display: 'block',
    backgroundColor: '#e55',
    height: '100vh',
    [theme.breakpoints.up('xs')]: {
      width: '75vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Header classes={classes.header} />
    </Paper>
  );
};

export default App;
