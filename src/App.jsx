import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/header/Header';
import Portfolio from './Portfolio';
import Links from './Links';
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
    <Router>
      <Paper className={classes.paper}>
        <Header classes={classes.header} />
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/links" component={Links} />
          <Route render={() => <Redirect to={{ pathname: '/' }} />} />
        </Switch>
      </Paper>
      <Footer classes={classes.footer} />
    </Router>
  );
};

export default App;
