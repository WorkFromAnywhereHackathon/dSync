import { Redirect, Route, Switch } from 'react-router-dom';
// import ChangeLang from 'components/ChangeLang';
import Logo from 'components/Logo';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import useStyles from './style';

const Auth = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />
      {/* <ChangeLang /> */}
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/forgot" render={() => <ForgotPassword />} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default Auth;
