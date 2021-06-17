import { SvgIcon } from '@material-ui/core';
import { ReactComponent as LogoSvg } from '../../assets/img/dSync.svg';
import useStyles from './style';

const Logo = ({ ...props }) => {
  const classes = useStyles();
  return <SvgIcon className={classes.logo} component={LogoSvg} viewBox="0 0 280 93" {...props} />;
};

export default Logo;
