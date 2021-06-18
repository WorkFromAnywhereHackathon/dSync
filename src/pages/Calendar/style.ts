import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
    },
  }),
);

export default useStyles;
