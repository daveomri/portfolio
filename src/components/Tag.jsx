import { styled } from '@mui/material/styles';

import { colors } from '../theme';

// Small outlined pill used for tech/skill tags. Shares the rounded-outline
// language of the buttons on the Links page.
const Tag = styled('span')({
  display: 'inline-block',
  border: `1px solid ${colors.ink}`,
  borderRadius: '5em',
  padding: '3px 11px',
  fontSize: '0.78rem',
  lineHeight: 1.6,
  color: colors.ink,
  whiteSpace: 'nowrap',
});

Tag.displayName = 'Tag';

export default Tag;
