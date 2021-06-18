import { ApiMap } from './types';

const apiMap: ApiMap = {
  login: {
    url: 'api/identity/getOTP',
    method: 'post',
  },
  getToken: {
    url: 'connect/token',
    method: 'post',
  },
  logout: {
    url: 'api/logout/:id',
    method: 'post',
    mock: [200, {}],
  },
  refresh: {
    url: 'connect/refresh-token',
    method: 'get',
  },
};

export default apiMap;
