import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import apiMap from 'http/apiMap';
import { requestGenerator } from 'http/index';
import { RootState } from 'store/reducers';
import { Auth } from 'store/types';
import { setLoggedIn, setLoggedOut, setLoading, setAuthenticating, setVerification, setVerifyPhone } from './actions';

function* verifyPhone({
  payload: { phoneNumber, clb = () => ({}) },
}: ReturnType<typeof setVerifyPhone.request>): SagaIterator {
  try {
    yield put(setLoading(true));

    const {
      // eslint-disable-next-line camelcase
      data: { verify_token },
      isAxiosError,
      response,
    } = yield call(requestGenerator(apiMap.login), {
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

    clb();
  } catch {
    yield put(setVerifyPhone.failure('Smth went wrong'));
    yield put(setLoading(false));
  }
}

function* loginUser({
  payload: { phoneNumber, verificationToken, grantType, clientId, clientSecret, clb = () => ({}) },
}: ReturnType<typeof setLoggedIn.request>): SagaIterator {
  try {
    yield put(setLoading(true));

    const {
      // eslint-disable-next-line camelcase
      data: { access_token, expires_in, refresh_token, scope },
      isAxiosError,
      response,
    } = yield call(requestGenerator(apiMap.getToken), {
      phone_number: phoneNumber,
      verification_token: verificationToken,
      grant_type: grantType,
      client_id: clientId,
      client_secret: clientSecret,
    });

    if (isAxiosError) throw Error(response?.data?.error);

    window.localStorage.setItem('credentinals', JSON.stringify({ access_token, expires_in, refresh_token, scope }));

    yield put(setLoading(false));
    yield put(setAuthenticating(false));

    clb();
  } catch {
    yield put(setLoggedIn.failure('Smth went wrong'));
    yield put(setLoading(false));
  }
}

function* logoutUser(): Generator<any, any, Auth> {
  try {
    const auth = yield select((state: RootState) => state.auth);

    yield call(requestGenerator(apiMap.logout, { id: +auth.id }), {});

    window.localStorage.removeItem('credentinals');

    yield put(setLoggedOut.success());
  } catch {
    yield put(setLoggedOut.failure('Smth went wrong'));
  }
}

export default function* sagas(): SagaIterator {
  yield all([
    takeEvery(setVerifyPhone.request, verifyPhone),
    takeEvery(setLoggedIn.request, loginUser),
    takeEvery(setLoggedOut.request, logoutUser),
  ]);
}
