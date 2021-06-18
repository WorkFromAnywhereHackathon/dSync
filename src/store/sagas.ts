import { all, fork } from 'redux-saga/effects';
import { standardsSaga } from './auth';
import { caldndarSaga } from './calendar';

export default function* rootSaga(): any {
  yield all([fork(standardsSaga), fork(caldndarSaga)]);
}
