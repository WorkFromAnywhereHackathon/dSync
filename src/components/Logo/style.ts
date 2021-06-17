import { makeStyles } from '@material-ui/core';
import theme from '../../theme';

const useStyles = makeStyles({
  logo: {
    width: '284px',
    height: '125px',
    [theme.breakpoints.up('lg')]: {
      width: '306px',
      height: '99px',
    },
    [theme.breakpoints.down('md')]: {
      width: '226px',
      height: '104px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '170px',
      height: '55px',
    },
  },
});

export default useStyles;
