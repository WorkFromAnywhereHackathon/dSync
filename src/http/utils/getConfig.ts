const getConfig = (token?: string) => ({
  headers: { Authorization: `Bearer ${token || window.localStorage.getItem('token')}` },
});

export default getConfig;
