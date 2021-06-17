import { createAsyncAction, createAction } from 'typesafe-actions';

export const setLoggedIn = createAsyncAction(
  'LOGIN/SET_LOGGED_IN/REQUEST',
  'LOGIN/SET_LOGGED_IN/SUCCESS',
  'LOGIN/SET_LOGGED_IN/FAILURE',
)<any, any, any>();

export const setLoggedOut = createAsyncAction(
  'LOGOUT/SET_LOGGED_OUT/REQUEST',
  'LOGOUT/SET_LOGGED_OUT/SUCCESS',
  'LOGOUT/SET_LOGGED_OUT/FAILURE',
)<undefined, undefined, any>();

export const setLoading = createAction('LOGOUT/SET_LOADING')<boolean>();

export const setAuthenticating = createAction('LOGOUT/SET_AUTHENTICATING')<boolean>();

export const setVerification = createAction('LOGOUT/SET_VERIFICATION')<{
  verifyToken?: string;
  isVerification: boolean;
}>();
