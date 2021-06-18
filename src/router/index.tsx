import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RootState } from 'store/reducers';
import { setLoggedIn, setAuthenticating } from 'store/auth/actions';

import PrivateRoute from './PrivateRoute';

const Auth = lazy(() => import('pages/Auth'));
const Users = lazy(() => import('pages/UserBoard'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Calendar = lazy(() => import('pages/Calendar'));

const AppRouter = () => {
  const dispatch = useDispatch();
  const { isAuthenticating } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const parsedCredentinals = JSON.parse(window.localStorage.getItem('credentinals') as string);
    if (parsedCredentinals?.token) {
      dispatch(
        setLoggedIn.success({
          ...parsedCredentinals,
        }),
      );
    }
    dispatch(setAuthenticating(false));
  }, [dispatch, isAuthenticating]);

  if (isAuthenticating) {
    return null;
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute exact path="/users" component={Users} />
          {/* <PrivateRoute exact path="/calendar" component={Calendar} /> */}
          <Route exact path="/calendar" component={Calendar} />
          <Route path="/auth" component={Auth} />
          <Redirect exact path="/" to="/auth/login" />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
