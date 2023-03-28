import { createTheme } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface Theme {
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//   }
// }

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ea4056',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
