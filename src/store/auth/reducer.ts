// import { LogOut } from './../types.d';
import { createReducer, ActionType } from 'typesafe-actions';
import { Auth } from '../types';
import * as actions from './actions';

type AuthActions = ActionType<typeof actions>;

const initialState: Auth = {
  id: '',
  isLoggedIn: false,
  token: '',
  refreshToken: '',
  isAuthenticated: false,
  errorMessage: '',
  firstName: '',
  lastName: '',
  loading: false,
  isAuthenticating: true,
  isVerification: false,
  phoneNumber: '',
  verifyToken: '123456',
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
  .handleAction(actions.setVerifyPhone.success, (state, { payload: { verifyToken, phoneNumber } }) => ({
    ...state,
    verifyToken,
    phoneNumber,
  }))
  .handleAction(actions.setVerifyPhone.failure, (state, { payload: error }) => ({
    ...state,
    errorMessage: error,
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
  }))
  .handleAction(actions.setVerification, (state, { payload: { isVerification, verifyToken = '' } }) => ({
    ...state,
    isVerification,
    verifyToken,
  }));

export default reducer;
