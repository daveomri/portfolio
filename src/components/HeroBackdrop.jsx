import { Box } from '@mui/material';

import strahov from '../resource/images/strahov.webp';
import strahovMobile from '../resource/images/strahov-mobile.webp';

const fade = `linear-gradient(to bottom,
  rgba(251, 247, 240, 0.15) 0%,
  rgba(251, 247, 240, 0.55) 55%,
  rgba(251, 247, 240, 1) 100%)`;
const HeroBackdrop = ({
  height = { xs: '70vh', md: '100vh' },
  position = 'center',
}) => (
  <Box
    aria-hidden="true"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height,
      backgroundImage: {
        xs: `${fade}, url(${strahovMobile})`,
        md: `${fade}, url(${strahov})`,
      },
      backgroundSize: 'cover',
      backgroundPosition: position,
      backgroundRepeat: 'no-repeat',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
);

HeroBackdrop.displayName = 'HeroBackdrop';

export default HeroBackdrop;
