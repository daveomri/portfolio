import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Link } from '@material-ui/core';

import links from './links';
import profile from './resource/images/profile.png';

const useStyles = makeStyles(() => ({
  content: {
    minHeight: '100vh',
  },
  profilePic: {
    minWidth: '150px',
    width: '10vw',
    borderRadius: '100vw',
    height: 'auto',
    border: '1px solid black',
  },
}));

const Links = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" className={classes.content}>
        <Grid item xs={12}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <img src={profile} alt="Logo" className={classes.profilePic} />
              </Grid>
            </Grid>
            {links.map((linkSection) => (
              <Grid item xs={12}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12}>
                    {linkSection.name}
                  </Grid>
                  {linkSection.links.map((link) => (
                    <Grid item>
                      <Link href={link.url}>
                        {link.name}
                      </Link>
                    </Grid>
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
