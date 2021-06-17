import { createMuiTheme } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3F74E2',
      dark: '#0D4CCE',
      contrastText: '#000000',
    },
    secondary: {
      light: '#7F8892',
      main: '#ffffff',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: ['Gilory-Light', 'Mulish', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 1024,
      lg: 1600,
      xl: 1920,
    },
  },
});
export default MuiTheme;
