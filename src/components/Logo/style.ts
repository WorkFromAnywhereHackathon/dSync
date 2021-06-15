import { makeStyles } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  wrapper: {
    '& p': {
      padding: '5px',
      borderRadius: '5px',
      backgroundColor: '#f2f2f2',
    },
  },
  logo: {
    position: 'absolute',
    left: '148px',
    top: '77px',
    width: '306px',
    [theme.breakpoints.up('lg')]: {
      left: '148px',
      top: '120px',
      width: '306px',
      height: '99px',
    },
    [theme.breakpoints.down('md')]: {
      left: '60px',
      top: '79px',
      width: '226px',
      height: '104px',
    },
    [theme.breakpoints.down('sm')]: {
      left: '14px',
      top: '166px',
      width: '170px',
      height: '55px',
    },
  },
  subtitle: {
    position: 'absolute',
    left: '152px',
    color: '#666666',
    marginBottom: '15px',
    fontSize: '30px',
    [theme.breakpoints.up('lg')]: {
      top: '77px',
      fontSize: '30px',
    },
    [theme.breakpoints.down('md')]: {
      left: '63px',
      top: '47px',
      fontSize: '22px',
    },
    [theme.breakpoints.down('sm')]: {
      left: '14px',
      top: '132px',
      fontSize: '16px',
    },
  },
});

export default useStyles;
