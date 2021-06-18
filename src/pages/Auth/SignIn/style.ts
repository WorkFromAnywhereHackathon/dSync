import { makeStyles } from '@material-ui/core/styles';
import theme from 'theme';

const useStyles = makeStyles({
  title: {
    fontSize: '36px',
    letterSpacing: '0em',
    marginBottom: '16px',
    fontWeight: 500,
  },
  hint: {
    lineHeight: '14.56px',
    marginBottom: '32px',
    color: `${theme.palette.secondary.light}`,
  },
  content: {
    margin: '0 auto',
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '32px',
    width: '100%',
  },
  loader: {
    margin: '0 auto',
  },
});

export default useStyles;
