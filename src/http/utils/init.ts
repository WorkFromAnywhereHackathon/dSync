import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import store from 'store';
import { setLoggedOut } from 'store/auth/actions';
import resetTokenUtil from './resetToken';

const baseURL = process.env.REACT_APP_BASE_API_IDENTITY;

export const http = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export const httpMock = axios.create({ baseURL });
export const mock = new MockAdapter(httpMock, { delayResponse: 1000 });

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (+error.response?.status === 401) {
      store.dispatch(setLoggedOut.request());
    }
    if (+error.response?.status === 403) {
      return resetTokenUtil(http, error);
    }

    return Promise.reject(error);
  },
);

http.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      baseUrl:
        config.url === 'api/identity/getOTP' || config.url === 'connect/token'
          ? process.env.REACT_APP_BASE_API_IDENTITY
          : process.env.REACT_APP_BASE_API_DATA,
    };
  },
  error => Promise.reject(error),
);

httpMock.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (+error.response?.status === 401) {
      store.dispatch(setLoggedOut.request());
    }
    if (+error.response?.status === 403) {
      return resetTokenUtil(httpMock, error);
    }

    return Promise.reject(error);
  },
);
