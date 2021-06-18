import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
    contained: {
      boxShadow: 'none',

      '&:hover': {
        boxShadow: 'none',
      },
    },
  }),
);

export default useStyles;
