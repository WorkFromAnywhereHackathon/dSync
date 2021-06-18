import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import store from 'store';
import { setLoggedOut } from 'store/auth/actions';
import resetTokenUtil from './resetToken';

const baseURL = process.env.REACT_APP_BASE_API_IDENTITY;

export const http = axios.create({
  baseURL,
  withCredentials: false,
  headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
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
