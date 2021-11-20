import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Box, Grid, Button } from '@material-ui/core';

import links from './links';
import profile from './resource/images/profile.png';

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: '100vh',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    color: '#0e1111',
    //backgroundImage: 'url(' + require('./resource/images/strahov.jpg') + ')',
    backgroundColor: '#FBF7F0',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  profilePic: {
    minWidth: '150px',
    width: '10vw',
    borderRadius: '100vw',
    height: 'auto',
    border: '1px solid black',
  },
  link: {
    marginTop: theme.spacing(1),
    borderRadius: '5em',
    color: '#0e1111',
    border: '1px solid #0e1111',
    '&:hover': {
      backgroundColor: '#D9E4DD',
      border: '1px solid #FBF7F0',
    },
  },
}));

const Links = () => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.content)}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <img src={profile} alt="Logo" className={classes.profilePic} />
              </Grid>
            </Grid>
            {links.map((linkSection, key) => (
              <Grid item xs={12} key={key}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    {linkSection.name}
                  </Grid>
                  {linkSection.links.map((link, keyy) => (
                    <Button
                      fullWidth
                      key={keyy}
                      variant="outlined"
                      color="primary"
                      className={classes.link}
                      target="_blank"
                      href={link.url}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Links.displayName = 'Links';

Links.propTypes = {};

Links.defaultProps = {};

export default Links;
