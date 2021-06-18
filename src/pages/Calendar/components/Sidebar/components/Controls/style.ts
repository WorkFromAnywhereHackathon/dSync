import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  }),
);

export default useStyles;
