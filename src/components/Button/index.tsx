import Button from '@material-ui/core/Button';
import useStyles from './style';

interface IButton {
  title: string;
  handleClick: any;
}

const FormButton = ({ title, handleClick }: IButton) => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.root} type="submit" onClick={handleClick}>
        {title}
      </Button>
    </div>
  );
};
export default FormButton;
