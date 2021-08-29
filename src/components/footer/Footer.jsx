import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Typography, IconButton } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import logo from '../../resource/images/logo.gif';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  footer: {
    backgroundColor: '#F2F3F3',
    minHeight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1),
    },
  },
  copyright: {
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  social: {
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  mission: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  logo: {
    justifyContent: 'center',
    direction: 'column',
    alignItems: 'center',
  },
  logoImage: {
    width: '100px',
    height: 'auto',
  },
  learn: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}));

const socialNetworks = [
  {
    name: 'github',
    icon: <GitHubIcon fontSize="small" />,
    url: 'https://github.com/daveomri',
  },
  {
    name: 'linkedin',
    icon: <LinkedInIcon fontSize="small" />,
    url: 'https://www.linkedin.com/in/david-omrai-9797011b7/',
  },
  {
    name: 'twitter',
    icon: <TwitterIcon fontSize="small" />,
    url: 'https://twitter.com/DaveOmri',
  },
  {
    name: 'instagram',
    icon: <InstagramIcon fontSize="small" />,
    url: 'https://www.instagram.com/daveomri/',
  },
];

const Header = () => {
  const classes = useStyles();

  const openUrl = url => event => {
    event.preventDefault();
    const win = window.open(url);
    win.focus();
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.mission}>
            <Typography>My Mission</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.logo}>
            <img src={logo} alt="Logo" className={classes.logoImage} />

            <Grid item xs={12} />
            <Typography>this is text</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.learn}>
            <Typography>Learn more</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={clsx(classes.root, classes.footer)}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Grid container className={classes.copyright}>
            <Typography variant="body2">© 2021 David Omrai</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container className={classes.social}>
            {socialNetworks.map(socNet => {
              return (
                <IconButton
                  key={socNet.name}
                  className={classes.button}
                  aria-label={socNet.name}
                  onClick={openUrl(socNet.url)}
                >
                  {socNet.icon}
                </IconButton>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  classes: PropTypes.object,
};

Header.defaultProps = {
  classes: {},
};

export default Header;
