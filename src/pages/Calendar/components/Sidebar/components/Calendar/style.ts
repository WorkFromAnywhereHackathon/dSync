import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    wrapper: {
      background: 'transparent!important',
      border: '0!important',
      '@global': {
        '.react-calendar__month-view__weekdays__weekday': {
          '& > *': {
            textAlign: 'center',
            fontSize: '0.6875rem',
            textTransform: 'none',
            textDecoration: 'none',
            fontWeight: 'normal',
          },
        },
      },
    },
  }),
);

export default useStyles;
