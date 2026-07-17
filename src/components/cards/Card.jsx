import { styled } from '@mui/material/styles';

// Section wrapper for a portfolio "card". Ported from the original
// styled-components definition to MUI's styled() so we ship a single
// styling engine (emotion).
const Card = styled('section')({
  minHeight: '100vh',
  display: 'grid',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: '5vw',
  marginRight: '5vw',
});

Card.displayName = 'Card';

export default Card;
