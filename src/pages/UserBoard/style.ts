import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '&::before': {
        content: '""',
        display: 'block',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backgroundColor: '#4A70BF',
        backgroundBlendMode: 'lighten',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        clipPath: 'inset(0 0 95% 0)',
      },
    },
    backButton: {
      position: 'absolute',
      left: '2.5%',
      zIndex: 3,
      color: 'white',
    },
  }),
);

export default useStyles;
