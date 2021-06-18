import * as React from 'react';
import clsx from 'clsx';
import { Button as UIButton, ButtonProps } from '@material-ui/core';
import useStyles from './style';

const Button: React.FC<ButtonProps> = props => {
  const classes = useStyles();

  return (
    <UIButton
      {...props}
      className={clsx(classes.root, { [classes.contained]: props.variant === 'contained' }, props.className)}
    />
  );
};

export default Button;
