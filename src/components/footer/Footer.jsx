import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import logo from '../../resource/images/logo.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: '#CDC9C3',
  },
  footer: {
    backgroundColor: '#555555',
    minHeight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1),
    },
  },
  copyright: {
    alignItems: 'center',
    color: '#CDC9C3',
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
  button: {
    color: '#CDC9C3',
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
    padding: theme.spacing(1),
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

const Footer = () => {
  const classes = useStyles();

  const openUrl = (url) => (event) => {
    event.preventDefault();
    const win = window.open(url);
    win.focus();
  };

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.mission} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.logo}>
            <img src={logo} alt="Logo" className={classes.logoImage} />
            <Grid item xs={12} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container className={classes.learn} />
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
            <Typography variant="body2">© David Omrai</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container className={classes.social}>
            {socialNetworks.map((socNet) => (
              <IconButton
                key={socNet.name}
                className={classes.button}
                aria-label={socNet.name}
                onClick={openUrl(socNet.url)}
              >
                {socNet.icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.displayName = 'Footer';

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
