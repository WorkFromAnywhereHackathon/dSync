import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '250px',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3.5),
      paddingRight: theme.spacing(3.5),
      backgroundColor: theme.palette.background.default,
    },
  }),
);

export default useStyles;
