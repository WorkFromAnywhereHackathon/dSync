import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from 'components/Logo';

import useStyles from './style';

const Contacts = lazy(() => import('./Contacts'));
const Booking = lazy(() => import('./Booking'));
const NotFound = lazy(() => import('pages/NotFound'));

const UserBoard = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.backButton}
        disabled={!history.length}
        onClick={() => {
          if (history.length) {
            history.goBack();
          }
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/contacts" component={Contacts} />
            <Route exact path="/booking/:id" component={Booking} />
            <Redirect from="/" to="/contacts" />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
      <Logo />
    </div>
  );
};

export default UserBoard;
