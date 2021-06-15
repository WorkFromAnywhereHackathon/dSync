import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '2.5%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'white',
      height: 'auto',
      fontSize: '20px',
      fontWeight: 700,
    },
  }),
);

export default useStyles;
