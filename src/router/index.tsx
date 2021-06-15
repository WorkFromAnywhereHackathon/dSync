import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { RootState } from 'store/reducers';
// import { setAuthenticating } from 'store/auth/actions';

// ToDo: auth through Private route
// import PrivateRoute from './PrivateRoute';

const UserBoard = lazy(() => import('pages/UserBoard'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={UserBoard} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
