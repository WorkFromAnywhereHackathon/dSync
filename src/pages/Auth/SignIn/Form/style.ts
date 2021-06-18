import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    background: 'none',
    width: '300px',
    padding: '10px',
    lineHeight: '30px',
    position: 'relative',
    marginBottom: '10px',
    textAlign: 'left',
  },
  label: {
    // fontWeight: '600',
    fontSize: '16px',
    lineHeight: '30px',
  },
  error: {
    color: 'red',
  },
});

export default useStyles;
