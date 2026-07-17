import {
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import profile from '../../resource/images/profile.webp';
import TypewriterText from '../TypewriterText';
import Card from './Card';
import { colors } from '../../theme';
import scrollToSection from '../../scrollToSection';

// TODO: confirm the address you want the "Get in touch" button to use.
const CONTACT_EMAIL = 'david.omrai@davq.net';

const roles = [
  'Data scientist',
  'Full-stack developer',
  'Automation engineer',
  'AI & knowledge engineering',
];

const socials = [
  { name: 'github', icon: <GitHubIcon />, url: 'https://github.com/daveomri' },
  {
    name: 'linkedin',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/david-omrai-9797011b7/',
  },
  {
    name: 'instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/daveomri/',
  },
];

const halo =
  '0 0 4px rgba(251, 247, 240, 0.95), 0 1px 16px rgba(251, 247, 240, 0.9)';

const profilePicSx = {
  minWidth: '200px',
  width: '20vw',
  borderRadius: '100vw',
  height: 'auto',
  border: '0px solid black',
  boxShadow: '0 0 0 6px rgba(251, 247, 240, 0.55)',
};

const eyebrowSx = {
  fontSize: '0.85rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#6b6b62',
  textShadow: halo,
  mb: 1,
};

const nameSx = {
  fontFamily: 'GOGOIA-Deco',
  fontSize: 'clamp(2.6rem, 1.5rem + 4vw, 3.6rem)',
  lineHeight: 1.05,
  letterSpacing: '1px',
  textShadow: halo,
  mb: 1,
};

const roleSx = {
  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
  color: '#3f5247',
  textShadow: halo,
  minHeight: '1.6em',
  mb: 2,
};

const introSx = {
  maxWidth: 540,
  color: '#2b2b2b',
  textShadow: halo,
  mb: 3,
};

const ctaSx = {
  borderRadius: '5em',
  color: colors.ink,
  border: `1px solid ${colors.ink}`,
  backgroundColor: 'rgba(251, 247, 240, 0.72)',
  backdropFilter: 'blur(2px)',
  px: 2.5,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: colors.sage,
    border: `1px solid ${colors.cream}`,
  },
};

const scrollCueSx = {
  position: 'absolute',
  bottom: 24,
  left: 0,
  right: 0,
  textAlign: 'center',
  color: '#7a7a70',
  cursor: 'pointer',
  animation: 'cue-bounce 2s ease-in-out infinite',
  '@keyframes cue-bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(6px)' },
  },
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
};

const Greetings = ({ id }) => (
  <Card id={id} sx={{ position: 'relative' }}>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid size={12}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <Grid container justifyContent="center" alignItems="center">
              <Box
                component="img"
                src={profile}
                alt="Dave Omrai"
                sx={profilePicSx}
              />
            </Grid>
          </Grid>
          <Grid size={{ xs: 11, sm: 10, md: 7 }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography sx={eyebrowSx}>Hey, and welcome</Typography>
              <Typography component="h1" sx={nameSx}>
                Dave Omrai
              </Typography>
              <TypewriterText words={roles} sx={roleSx} />
              <Typography variant="body1" sx={introSx}>
                I build <b>web applications</b>, <b>automation pipelines</b>,
                and <b>AI-driven systems</b>, with a background in{' '}
                <b>knowledge engineering</b> and <b>data science</b>{' '}
                (master&apos;s at FIT CTU).
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                sx={{ flexWrap: 'wrap', gap: 1.5, justifyContent: 'inherit' }}
              >
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="outlined"
                  sx={ctaSx}
                >
                  See my work
                </Button>
                <Button
                  component={RouterLink}
                  to="/links"
                  variant="outlined"
                  sx={ctaSx}
                >
                  Links
                </Button>
                <Button
                  component="a"
                  href={`mailto:${CONTACT_EMAIL}`}
                  variant="outlined"
                  startIcon={<MailOutlineIcon />}
                  sx={ctaSx}
                >
                  Get in touch
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
                {socials.map((s) => (
                  <IconButton
                    key={s.name}
                    component="a"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    sx={{ color: colors.ink }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box
        role="button"
        tabIndex={0}
        onClick={() => scrollToSection('skills')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') scrollToSection('skills');
        }}
        sx={scrollCueSx}
        aria-label="Scroll to content"
      >
        <Typography sx={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
          scroll
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Grid>
  </Card>
);

Greetings.displayName = 'Greetings';

export default Greetings;
