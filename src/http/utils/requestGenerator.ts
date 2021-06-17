import { generatePath } from 'react-router-dom';
import { ApiMapItem, Params } from 'http/types';
import { httpMock, http, mock } from 'http/index';
import getCofig from './getConfig';

const requestGenerator = (apiMapRequest: ApiMapItem, params?: Params, isDataExchange = true) => {
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
    axiosInstance[apiMapRequest.method || 'get'](path, payload, getCofig({ isDataExchange }))
      .then((res: any) => res)
      .catch((error: any) => error);
};

export default requestGenerator;
