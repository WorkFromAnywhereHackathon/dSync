const getConfig = (token?: string) => ({
  headers: {
    Authorization: `Bearer ${token || window.localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
  },
});

export default getConfig;
