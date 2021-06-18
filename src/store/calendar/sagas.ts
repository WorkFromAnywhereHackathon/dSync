import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import apiMap from 'http/apiMap';
import requestGenerator from 'http/utils/requestGenerator';
import { RootState } from 'store/reducers';
import { Calendar, Event } from 'store/types';
import * as actions from './actions';

function* fetchEvents(): SagaIterator {
  try {
    const calendar: Calendar = yield select((state: RootState) => state.calendar);
    const events: Event[] = yield call(requestGenerator(apiMap.events, { date: calendar.date }), {});

    yield put(actions.fetchEvents.success({ events }));
  } catch {
    yield put(actions.fetchEvents.failure());
  }
}

export default function* sagas(): SagaIterator {
  yield all([takeEvery(actions.fetchEvents.request, fetchEvents)]);
}
