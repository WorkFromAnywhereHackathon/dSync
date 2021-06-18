import { makeStyles, createStyles } from '@material-ui/core';
import MuiTheme from 'theme';

const useStyles = makeStyles((theme: typeof MuiTheme) =>
  createStyles({
    calendar: {
      flex: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default useStyles;
