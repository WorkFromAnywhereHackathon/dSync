import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(2.5),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(2.5),
      paddingLeft: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },
    date: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    dateControls: {
      marginLeft: theme.spacing(1),
    },
    actions: {
      flex: 1,
    },
  }),
);

export default useStyles;
