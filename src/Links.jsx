import { Box, Grid, Button } from '@mui/material';

import links from './linksData';
import profile from './resource/images/profile.webp';
import HeroBackdrop from './components/HeroBackdrop';
import { colors } from './theme';

const rootSx = {
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: colors.cream,
};

const contentSx = {
  position: 'relative',
  zIndex: 1,
  mt: { xs: '3em', sm: '4em' },
  pt: '2em',
  pb: '10vh',
  color: colors.ink,
};

const profilePicSx = {
  minWidth: '150px',
  width: '10vw',
  borderRadius: '100vw',
  height: 'auto',
  border: '0px solid black',
};

const linkSx = {
  mt: 1,
  borderRadius: '5em',
  color: colors.ink,
  border: `1px solid ${colors.ink}`,
  // Frosted cream fill so the pills read cleanly over the hero photo
  // (and blend into the page once it has faded to cream).
  backgroundColor: 'rgba(251, 247, 240, 0.72)',
  backdropFilter: 'blur(2px)',
  '&:hover': {
    backgroundColor: colors.sage,
    border: `1px solid ${colors.cream}`,
  },
};

const sectionTitleSx = {
  textAlign: 'center',
  textShadow:
    '0 0 4px rgba(251, 247, 240, 0.95), 0 1px 16px rgba(251, 247, 240, 0.9)',
};

const Links = () => (
  <Box sx={rootSx}>
    <HeroBackdrop height={{ xs: '45vh', md: '65vh' }} position="top" />
    <Box sx={contentSx}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid size={{ xs: 8, md: 4 }}>
          <Grid container direction="column" spacing={2}>
            <Grid size={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={profile}
                  alt="Profile"
                  sx={profilePicSx}
                />
              </Grid>
            </Grid>
            {links.map((linkSection) => (
              <Grid size={12} key={linkSection.name}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid size={12} sx={sectionTitleSx}>
                    {linkSection.name}
                  </Grid>
                  {linkSection.links.map((link) => (
                    <Button
                      fullWidth
                      key={link.name}
                      variant="outlined"
                      color="primary"
                      sx={linkSx}
                      target="_blank"
                      rel="noopener noreferrer"
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
  </Box>
);

Links.displayName = 'Links';

export default Links;
