import { createAsyncAction, createAction } from 'typesafe-actions';

export const fetchEvents = createAsyncAction(
  'CALENDAR/FETCH_EVENTS/REQUEST',
  'CALENDAR/FETCH_EVENTS/SUCCESS',
  'CALENDAR/FETCH_EVENTS/FAILURE',
)<void, { events: any[] }, void>();

export const changeDateRange = createAction('CALENDAR/CHANGE_DATE_RANGE')<{ date: string }>();
