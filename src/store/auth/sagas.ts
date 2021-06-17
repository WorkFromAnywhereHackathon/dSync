import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import apiMap from 'http/apiMap';
import requestGenerator from 'http/utils/requestGenerator';
import { RootState } from 'store/reducers';
import { Auth } from 'store/types';
import { setLoggedIn, setLoggedOut, setLoading, setAuthenticating, setVerification } from './actions';

function* loginUser({ payload: { phoneNumber, clb } }: ReturnType<typeof setLoggedIn.request>): SagaIterator {
  try {
    yield put(setLoading(true));

    const {
      // eslint-disable-next-line camelcase
      data: { verify_token },
      isAxiosError,
      response,
    } = yield call(requestGenerator(apiMap.login, undefined, false), {
      PhoneNumber: phoneNumber,
    });

    if (isAxiosError) throw Error(response?.data?.error);

    yield put(
      setVerification({
        verifyToken: verify_token,
        isVerification: true,
      }),
    );

    yield put(setLoading(false));
    yield put(setAuthenticating(false));

    // window.localStorage.setItem('credentinals', JSON.stringify({ id, token, lastName, firstName }));

    clb();
  } catch {
    // 400 show error modal
    yield put(setLoggedIn.failure({ error: 'Smth went wrong' }));
    yield put(setLoading(true));
  }
}

function* logoutUser(): Generator<any, any, Auth> {
  try {
    const auth = yield select((state: RootState) => state.auth);

    yield call(requestGenerator(apiMap.logout, { id: +auth.id }), {});

    window.localStorage.removeItem('credentinals');

    yield put(setLoggedOut.success());
  } catch {
    yield put(setLoggedOut.failure({ error: 'Smth went wrong' }));
  }
}

export default function* sagas(): SagaIterator {
  yield all([takeEvery(setLoggedIn.request, loginUser), takeEvery(setLoggedOut.request, logoutUser)]);
}
