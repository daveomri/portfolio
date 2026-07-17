import { colors } from '../../theme';

// Shared layout tokens for the content sections on the home page
// (Skills, Projects, Community). Natural height, dashed divider on top,
// centered inner column.
export const sectionSx = {
  px: { xs: '5vw', md: '8vw' },
  py: { xs: 6, md: 10 },
  borderTop: '1px dashed #bbcfc2',
};

export const innerSx = {
  maxWidth: 1040,
  mx: 'auto',
};

export const headingSx = {
  fontFamily: 'GOGOIA-Deco',
  fontSize: 'clamp(1.6rem, 1rem + 2.5vw, 2.1rem)',
  textAlign: 'center',
  mb: 1,
};

export const cardSx = {
  border: `1px solid ${colors.sage}`,
  borderRadius: '16px',
  p: 2.5,
  backgroundColor: '#fff',
};
