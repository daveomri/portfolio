import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Portfolio from './Portfolio';
import Links from './Links';
import Footer from './components/footer/Footer';

import ScrollToTop from './ScrollToTop';

const useStyles = makeStyles(() => ({
  content: {
    //paddingTop: '4em',
  },
  paper: {
    minHeight: '100vh',
    marginTop: '0em',
    //paddingTop: '64px',
    // [theme.breakpoints.down('xs')]: {
    //   //paddingTop: '56px',
    //   marginTop: '57px',
    // },
    backgroundColor: '#FBF7F0',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <HashRouter>
      <ScrollToTop />
      <Header classes={classes.header} />
      <Paper className={classes.paper}>
        <Switch>
          <Route exact path="/links" component={Links} />
          <Route exact path="/" component={Portfolio} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Paper>
      <Footer classes={classes.footer} />
    </HashRouter>
  );
};

export default App;
