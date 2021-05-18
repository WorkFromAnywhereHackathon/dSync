import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
  },
  title: {
    textAlign: 'center',
    fontSize: '50px',
    // fontWeight: '700',
    letterSpacing: '0em',
    color: '#2e3192',
    marginBottom: '62px',
    marginTop: '300px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '302px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '236px',
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '265px',
      fontSize: '30px',
      marginBottom: '37px',
    },
    fontWeight: 700,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '300px',
    width: '100%',
  },
  forgot: {
    display: 'block',
    textDecoration: 'none',
    textAlign: 'left',
    marginBottom: '52px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
    },
  },
});

export default useStyles;
