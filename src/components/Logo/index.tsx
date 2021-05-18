import { Box, Typography, SvgIcon } from '@material-ui/core';
import useStyles from './style';

export default function Logo() {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.subtitle}>
        Welcom to <b>dSync</b>
      </Typography>
      <SvgIcon className={classes.logo} viewBox="0 0 306 100" />
    </Box>
  );
}
