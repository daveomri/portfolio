import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

const useStyles = makeStyles(theme => ({
  appBar: {
    color: '#000',
    backgroundColor: '#fff',
    borderBottom: '1px solid #838789',
    boxShadow: 'none',
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: 'auto',
    padding: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Greetings = () => {
  const classes = useStyles();

  return (
    <Card>
        Greetings page
    </Card>
  );
};

export default Greetings;
