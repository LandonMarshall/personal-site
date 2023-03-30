import { createTheme } from '@mui/material/styles';

const colours = {
  primary: '#243E56',
  secondary: '#7692ff',
  primaryText: '#e0e1dd',
  secondaryText: '#fff',
  background: '#41729F',
};

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: colours.primary,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: colours.secondary,
    },
    common: {
      black: colours.background,
      white: '#ffffff',
    },
    text: {
      primary: colours.primaryText,
      secondary: colours.secondaryText,
    },
    background: {
      paper: colours.background,
      default: colours.background,
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    allVariants: {
      color: colours.primaryText,
      fontFamily: "'Outfit', sans-serif",
    },
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
    },
    h6: {
      fontWeight: 300,
    }
  },
});
