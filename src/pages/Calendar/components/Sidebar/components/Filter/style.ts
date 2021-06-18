import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(5),
    },
  }),
);

export default useStyles;
