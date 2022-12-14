import { create } from 'apisauce';
import { PER_PAGE } from '../../@types/constant';
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

const fechGetBlogs = (offset: number, search: string, ordering: string) => {
  return API.get('/blog/posts/', { limit: PER_PAGE, offset, search, ordering });
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

const getMyBlogs = (token: string) => {
  return API.get('/blog/posts/my_posts', { token });
};

export default {
  registerUser,
  fechGetBlogs,
  fechActivteNewUser,
  signInUser,
  getUserMe,
  getNewAccessToken,
  verifyToken,
  getMyBlogs,
};
