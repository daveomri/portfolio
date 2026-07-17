import { Grid, Typography, IconButton, Box } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import logo from '../../resource/images/logo.gif';
import { colors } from '../../theme';

const rootSx = { px: 3, backgroundColor: colors.footerText };

const barSx = {
  ...rootSx,
  backgroundColor: colors.footerGrey,
  minHeight: (theme) => theme.spacing(4),
  py: { xs: 1, sm: 0 },
};

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
    name: 'facebook',
    icon: <FacebookIcon fontSize="small" />,
    url: 'https://www.facebook.com/daom99/',
  },
  {
    name: 'instagram',
    icon: <InstagramIcon fontSize="small" />,
    url: 'https://www.instagram.com/daveomri/',
  },
];

const Footer = () => (
  <Box component="footer">
    <Grid container sx={rootSx}>
      <Grid size={{ xs: 12, sm: 4 }} />
      <Grid size={{ xs: 12, sm: 4 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: '100px', height: 'auto', p: 1 }}
          />
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} />
    </Grid>

    <Grid container sx={barSx} alignItems="center">
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          sx={{ color: colors.footerText }}
        >
          <Typography variant="body2">© David Omrai</Typography>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'flex-end' }}
        >
          {socialNetworks.map((socNet) => (
            <IconButton
              key={socNet.name}
              sx={{ color: colors.footerText }}
              aria-label={socNet.name}
              component="a"
              href={socNet.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socNet.icon}
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

Footer.displayName = 'Footer';

export default Footer;
