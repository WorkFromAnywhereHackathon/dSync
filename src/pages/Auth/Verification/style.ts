import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme';

const useStyles = makeStyles({
  backButton: {
    maxHeight: '24px',
    padding: 0,
    marginBottom: '36px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '36px',
    letterSpacing: '0em',
    marginBottom: '16px',
    fontWeight: 500,
  },
  textFieldLabel: {
    '& input': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '17px',
    },
  },
  hint: {
    lineHeight: '14.56px',
    marginBottom: '32px',
    color: `${theme.palette.secondary.light}`,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '32px',
    rowGap: '32px',
    width: '100%',
    maxWidth: '238px',
  },
  loader: {
    margin: '0 auto',
  },
  resend: {
    marginTop: '22px',
    backgroundColor: 'transparent',
    textTransform: 'unset',
    '&:hover': {
      backgroundColor: 'transparent',
      color: `${theme.palette.primary.dark}`,
    },
  },
});

export default useStyles;
