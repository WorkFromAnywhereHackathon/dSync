// import { LogOut } from './../types.d';
import { createReducer, ActionType } from 'typesafe-actions';
import { Auth } from '../types';
import * as actions from './actions';

type AuthActions = ActionType<typeof actions>;

const initialState: Auth = {
  id: '',
  isLoggedIn: false,
  token: '',
  refreshToken: '1111',
  isAuthenticated: false,
  errorMessage: '',
  firstName: '',
  lastName: '',
  loading: false,
  isAuthenticating: true,
};

const reducer = createReducer<Auth, AuthActions>(initialState)
  .handleAction(actions.setLoading, (state, { payload: loading }) => ({
    ...state,
    loading,
  }))
  .handleAction(actions.setAuthenticating, (state, { payload: isAuthenticating }) => ({
    ...state,
    isAuthenticating,
  }))
  .handleAction(actions.setLoggedIn.success, (state, { payload: { id, firstName, lastName, token } }) => ({
    ...state,
    id,
    firstName,
    lastName,
    token,
    isAuthenticated: true,
  }))
  .handleAction(actions.setLoggedIn.failure, (state, { payload: error }) => ({
    ...state,
    errorMessage: error,
  }))
  .handleAction(actions.setLoggedOut.success, () => ({
    ...initialState,
  }))
  .handleAction(actions.setLoggedOut.failure, (state, { payload: error }) => ({
    ...state,
    errorMessage: error,
  }));

export default reducer;
