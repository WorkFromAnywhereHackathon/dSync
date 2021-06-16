import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from '../../theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      right: 0,
      top: 0,
    },
  }),
);

export default useStyles;
