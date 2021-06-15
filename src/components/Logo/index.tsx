import { FC } from 'react';
import { Box, Typography, SvgIcon } from '@material-ui/core';

import useStyles from './style';

const Logo: FC<{
  color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}> = ({ color }) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.subtitle} color={color || 'primary'}>
        Welcome to <b>dSync</b>
      </Typography>
      <SvgIcon className={classes.logo} viewBox="0 0 306 100" />
    </Box>
  );
};

export default Logo;
