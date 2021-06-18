import { combineReducers } from 'redux';
import authReducer from './auth';
import calendarReducers from './calendar';

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
