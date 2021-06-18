import { FC } from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './style';

interface IButton extends Omit<typeof Button, 'title' | 'onClick' | 'fullWidth' | 'color' | 'className'> {
  title: string;
  onClick(): void;
  fullWidth?: boolean;
  color?: any;
  className?: string;
}

const SubmitButton: FC<IButton> = ({ title, onClick, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick} type="submit" {...props}>
      {title}
    </Button>
  );
};
export default SubmitButton;
