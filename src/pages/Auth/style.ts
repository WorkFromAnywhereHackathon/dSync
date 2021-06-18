import { makeStyles } from '@material-ui/core';
import theme from 'theme';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    alignItems: 'stretch',
  },
  routing: {
    minWidth: '238px',
    flexBasis: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      maxWidth: '238px',
    },
  },
  svgBox: {
    flexBasis: '60%',
    minWidth: '350px',
    flexGrow: 1,
    backgroundColor: `${theme.palette.primary.main}`,
    textAlign: 'center',
    '& svg': {
      marginTop: '50vh',
      transform: 'translateY(-50%)',
    },
  },
});

export default useStyles;
