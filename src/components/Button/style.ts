import { makeStyles, createStyles } from '@material-ui/core';
import theme from 'theme';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      padding: '19px',
      borderRadius: '6px',
      maxHeight: '44px',
      fontWeight: 'bold',
      textTransform: 'unset',
      backgroundColor: `${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: `${theme.palette.primary.dark}`,
      },
    },
  }),
);

export default useStyles;
