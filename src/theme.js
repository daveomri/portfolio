import { createTheme } from '@mui/material/styles';

// Palette carried over from the original design.
export const colors = {
  cream: '#FBF7F0',
  sage: '#D9E4DD',
  ink: '#0e1111',
  footerGrey: '#555555',
  footerText: '#CDC9C3',
};

const theme = createTheme({
  palette: {
    primary: { main: colors.ink },
    background: { default: colors.cream },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
