import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
// import ChangeLang from 'components/ChangeLang';
import Logo from 'components/Logo';
import { RootState } from 'store/reducers';
import SignIn from './SignIn';
import Verification from './Verification';

import useStyles from './style';

const Auth = () => {
  const classes = useStyles();
  const { isVerification } = useSelector((state: RootState) => state.auth);

  return (
    <div className={classes.root}>
      {/* <ChangeLang /> */}
      <div className={classes.routing}>
        <Switch>
          <Route exact path="/auth" component={SignIn} />
          {isVerification && <Route exact path="/auth/verification" component={Verification} />}
          <Redirect to="/auth" />
        </Switch>
      </div>
      <div className={classes.svgBox}>
        <Logo color="secondary" />
      </div>
    </div>
  );
};

export default Auth;
