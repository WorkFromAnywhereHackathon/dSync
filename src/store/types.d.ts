import { StateType } from 'typesafe-actions';

export type RootState = StateType<typeof import('./reducers').default>;
export interface Auth {
  id: string;
  isLoggedIn: boolean;
  token: string;
  refreshToken: string;
  isAuthenticated: boolean;
  errorMessage: string;
  userLoggedOut?: boolean;
  info?: any;
  firstName: string;
  lastName: string;
  loading: boolean;
  isAuthenticating: boolean;
}

export interface LogOut {
  logOut: boolean;
}
