import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
    },
  }),
);

export default useStyles;
