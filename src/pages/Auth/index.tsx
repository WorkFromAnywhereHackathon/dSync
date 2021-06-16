import { Redirect, Route, Switch } from 'react-router-dom';
// import ChangeLang from 'components/ChangeLang';
import Logo from 'components/Logo';
import Login from './Login';
import useStyles from './style';

const Auth = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Logo />
      {/* <ChangeLang /> */}
      <Switch>
        <Route exact path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    </div>
  );
};

export default Auth;
