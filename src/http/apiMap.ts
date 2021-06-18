import { ApiMap } from './types';

const apiMap: ApiMap = {
  login: {
    url: '/api/login',
    method: 'get',
    mock: (data: any) => {
      if (data.email === 'user@example.com' && data.password === '123') {
        return [
          200,
          {
            id: '1',
            email: data.emai,
            firstName: 'first',
            lastName: 'last',
            token: '0000',
          },
        ];
      }
      return [
        401,
        {
          error: 'Wrong email or password',
        },
      ];
    },
  },
  logout: {
    url: '/api/logout/:id',
    method: 'post',
    mock: [200, {}],
  },
  refresh: {
    url: '/api/token/refresh',
    method: 'post',
    mock: [200, { token: '0000' }],
  },
  events: {
    url: '/api/events/:date/byDate',
    method: 'get',
  },
};

export default apiMap;
