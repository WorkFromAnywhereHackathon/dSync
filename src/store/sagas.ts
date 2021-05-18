import { all, fork } from 'redux-saga/effects';
import { standardsSaga } from './auth';

export default function* rootSaga(): any {
  yield all([fork(standardsSaga)]);
}
