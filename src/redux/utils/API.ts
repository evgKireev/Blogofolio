import { create } from 'apisauce';
import { SignInUser, UserActivateType, UserType } from '../../@types/user';

const API = create({
  baseURL: 'https://studapi.teachmeskills.by',
});

const registerUser = ({ username, email, password }: UserType) => {
  return API.post('/auth/users/', {
    username,
    email,
    password,
  });
};

const fechGetBlogs = () => {
  return API.get(`/blog/posts/?limit=11`);
};

const fechActivteNewUser = ({ uid, token }: UserActivateType) => {
  return API.post('/auth/users/activation/', {
    uid,
    token,
  });
};

const signInUser = ({ password, email }: SignInUser) => {
  return API.post('auth/jwt/create/', {
    password,
    email,
  });
};

const getUserMe = (accessToken: string) => {
  return API.get(
    '/auth/users/me/',
    {},
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};

const getNewAccessToken = (refresh: string) => {
  return API.post('/auth/jwt/refresh', { refresh });
};

const verifyToken = (token: string) => {
  return API.post('/auth/jwt/verify', { token });
};

export default {
  registerUser,
  fechGetBlogs,
  fechActivteNewUser,
  signInUser,
  getUserMe,
  getNewAccessToken,
  verifyToken,
};
