import { createReducer, ActionType } from 'typesafe-actions';
import moment from 'moment';
import { momentCalendarFormat } from '../../constants';
import { Calendar } from '../types';
import * as actions from './actions';

type CalendarActions = ActionType<typeof actions>;

const initialState: Calendar = {
  loading: false,
  events: [],
  date: moment().format(momentCalendarFormat),
};

const reducer = createReducer<Calendar, CalendarActions>(initialState)
  .handleAction(actions.fetchEvents.request, state => ({
    ...state,
    loading: true,
  }))
  .handleAction(actions.fetchEvents.failure, state => ({
    ...state,
    loading: false,
  }))
  .handleAction(actions.fetchEvents.success, (state, { payload: { events } }) => ({
    ...state,
    events,
    loading: false,
  }))
  .handleAction(actions.changeDateRange, (state, { payload: { date } }) => ({ ...state, date }));

export default reducer;
