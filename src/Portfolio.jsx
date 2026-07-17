import { Box } from '@mui/material';

import Greetings from './components/cards/Greetings';
import Skills from './components/cards/Skills';
import Projects from './components/cards/Projects';
import Community from './components/cards/Community';
import HeroBackdrop from './components/HeroBackdrop';
import { colors } from './theme';

const Portfolio = () => (
  <Box sx={{ position: 'relative', backgroundColor: colors.cream }}>
    <HeroBackdrop />
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Greetings id="about_me" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Community id="community" />
    </Box>
  </Box>
);

Portfolio.displayName = 'Portfolio';

export default Portfolio;
