import { Box } from '@mui/material';

import strahov from '../resource/images/strahov.webp';

// Decorative hero backdrop pinned to the top of a page. The Strahov photo is
// covered by a top-to-bottom cream gradient so it dissolves into the page
// background. Sits behind content (give the parent `position: relative` and the
// content `zIndex: 1`), ignores pointer events, and is hidden from a11y tools.
//
// `position` frames the photo (any CSS background-position). The default
// centers on the building; anchoring higher (e.g. '50% 15%') brings the calm
// sky forward and pushes the busy window band down into the faded zone — handy
// where a short backdrop would otherwise show that band as a hard line.
//
// `blur` softens the photo on narrow/stacked layouts where the whole building
// is visible; desktop stays crisp by default.
const HeroBackdrop = ({
  height = { xs: '70vh', md: '100vh' },
  position = 'center',
  blur = { xs: 'blur(2px)', md: 'none' },
}) => (
  <Box
    aria-hidden="true"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height,
      backgroundImage: `linear-gradient(to bottom,
          rgba(251, 247, 240, 0.15) 0%,
          rgba(251, 247, 240, 0.55) 55%,
          rgba(251, 247, 240, 1) 100%),
        url(${strahov})`,
      backgroundSize: 'cover',
      backgroundPosition: position,
      backgroundRepeat: 'no-repeat',
      filter: blur,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
);

HeroBackdrop.displayName = 'HeroBackdrop';

export default HeroBackdrop;
