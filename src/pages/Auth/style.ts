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
  }),
);

export default useStyles;
