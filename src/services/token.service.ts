const getLocalRefreshToken = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user') as any);
    return user?.refreshToken;
  }
};

const getLocalAccessToken = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user') as any);
    return user?.accessToken;
  }
};

const updateLocalAccessToken = (token: string) => {
  let user = JSON.parse(localStorage.getItem('user') as any);
  user.accessToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('user') as any);
  }
};

const setUser = (user: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

const removeUser = () => {
  localStorage.removeItem('user');
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser
};

export default TokenService;
