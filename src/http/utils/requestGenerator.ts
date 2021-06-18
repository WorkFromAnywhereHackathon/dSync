import { generatePath } from 'react-router-dom';
import { ApiMapItem, Params } from 'http/types';
import { httpMock, http, mock } from 'http/index';

const requestGenerator = (apiMapRequest: ApiMapItem, params?: Params) => {
  const path = generatePath(apiMapRequest.url, params);
  const axiosInstance = apiMapRequest.mock ? httpMock : http;
  if (apiMapRequest.mock) {
    const clbMock = typeof apiMapRequest.mock === 'function' ? apiMapRequest.mock : () => apiMapRequest.mock;
    switch (apiMapRequest.method) {
      case 'get':
        mock.onGet(path).reply(clbMock);
        break;
      case 'post':
        mock.onPost(path).reply(clbMock);
        break;
      default:
        mock.onGet(path).reply(clbMock);
        break;
    }
  }

  return (payload: any) =>
    axiosInstance[apiMapRequest.method || 'get'](path, payload)
      .then((res: any) => res)
      .catch((error: any) => error);
};

export default requestGenerator;
