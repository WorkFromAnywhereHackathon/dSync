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

export type Event = {
  Id: string;
  Name: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
  OwnerUserId: string;
  IsOwner: boolean;
  Invites: null;
  IsEnabled: boolean;
  Color: string;
  ConfirmBeforeInHours: null;
  NotifyBeforeInMinutes: null;
};
export interface Calendar {
  loading: boolean;
  events: Event[];
  date: string;
}

export interface LogOut {
  logOut: boolean;
}
