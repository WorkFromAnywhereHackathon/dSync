const getConfig = ({ token, isDataExchange }: { token?: string; isDataExchange?: boolean }) => {
  return {
    headers: { Authorization: `Bearer ${token || window.localStorage.getItem('token')}` },
    baseUrl: isDataExchange ? process.env.REACT_APP_BASE_API_DATA : process.env.REACT_APP_BASE_API_IDENTITY,
  };
};

export default getConfig;
