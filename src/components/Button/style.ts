import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      padding: '19px',
      backgroundColor: '#2e3192',
      color: '#ffffff',
      boxShadow: '0px 4px 15px rgba(38, 64, 152, 0.3)',
      borderRadius: '50px',

      '&:hover': {
        backgroundColor: '#2e3192',
      },
    },
  }),
);

export default useStyles;
