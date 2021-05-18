import { createMuiTheme } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2E3192',
      contrastText: '#666666',
    },
    secondary: {
      main: '#666666',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: ['Mulish', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
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
