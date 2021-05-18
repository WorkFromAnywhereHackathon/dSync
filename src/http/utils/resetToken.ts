import { generatePath } from 'react-router-dom';
import apiMap from 'http/apiMap';
import store from 'store';
import { AxiosInstance } from 'axios';

let isAlreadyFetchingAccessToken = false;
let requestsArray: any[] = [];

const addSubscriber = (callback: any) => {
  requestsArray.push(callback);
};

const onAccessTokenFetched = (accessToken: any) => {
  requestsArray.forEach(callback => callback(accessToken));
  requestsArray = [];
};

const resetTokenUtil = async (axiosInstance: AxiosInstance, error: any) => {
  try {
    const { response: errorResponse } = error;
    // const resetTokenResult = await auth.resetToken();
    // if (!resetTokenResult) {
    //   return Promise.reject(error);
    // }

    const retryOriginalRequest = new Promise(resolve => {
      addSubscriber((accessToken: any) => {
        errorResponse.config.headers.Authorization = `Bearer ${accessToken}`;
        resolve(axiosInstance(errorResponse.config));
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await axiosInstance({
        method: 'post',
        url: generatePath(apiMap.refresh.url, { id: store.getState().auth.id }),
        data: {
          token: window.localStorage.getItem('token'),
        },
      });

      if (!response.data) {
        return Promise.reject(error);
      }

      const newToken = response.data.token;
      window.localStorage.setItem('token', newToken);
      isAlreadyFetchingAccessToken = false;
      onAccessTokenFetched(newToken);
    }

    return retryOriginalRequest;
  } catch (exception) {
    return Promise.reject(exception);
  }
};

export default resetTokenUtil;
