import { Box, Typography } from '@mui/material';

import { sectionSx, headingSx } from './sectionStyles';

const Community = ({ id }) => (
  <Box component="section" id={id} sx={sectionSx}>
    <Box sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center' }}>
      <Typography component="h2" sx={headingSx}>
        Community & events
      </Typography>
      <Typography sx={{ color: '#444', lineHeight: 1.7 }}>
        Regular attendee of AI workshops and meetups — sometimes presenting,
        sometimes helping out behind the scenes.
      </Typography>
      <Typography sx={{ mt: 4, fontStyle: 'italic', color: '#333' }}>
        I&apos;m drawn to problems where AI, automation, and solid engineering
        overlap.
      </Typography>
    </Box>
  </Box>
);

Community.displayName = 'Community';

export default Community;
