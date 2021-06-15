import { makeStyles } from '@material-ui/core/styles';
import theme from 'theme';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    right: 0,
    top: 0,
    '&::before': {
      content: '""',
      display: 'block',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      backgroundColor: '#2e3192',
      backgroundBlendMode: 'lighten',
      backgroundRepeat: 'no-repeat',
      backgroundSize: ' contain',
      backgroundPosition: 'right 0',
      clipPath: 'polygon(20% 0, 100% 0, 100% 73%)',
      [theme.breakpoints.down('sm')]: {
        clipPath: 'polygon(0 0, 100% 0, 100% 12%, 0 26%)',
        transform: 'scaleX(-1)',
      },
      [theme.breakpoints.up('md')]: {
        clipPath: 'polygon(37% 0, 100% 0, 100% 65%)',
      },
      [theme.breakpoints.up('lg')]: {
        clipPath: 'polygon(35% 0, 100% 0, 100% 65%)',
      },
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '50px',
    // fontWeight: '700',
    letterSpacing: '0em',
    color: '#4A70BF',
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
