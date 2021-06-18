import { AxiosRequestConfig } from 'axios';

const getConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*',
      ...config.headers,
    },
    baseURL: process.env.REACT_APP_BASE_API_DATA,
    ...config,
  };
};

export default getConfig;
