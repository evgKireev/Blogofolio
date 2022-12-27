import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_KEY } from '../../@types/constant';
import { SignInUserPayload, UserMe } from '../../@types/user';

type initialStateSignIn = {
  signInMail: string;
  signInPassword: string;
  registered: boolean;
  username: string;
  idUser: number | null;
  status: string;
};

const initialState: initialStateSignIn = {
  signInMail: '',
  signInPassword: '',
  registered: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  username: '',
  idUser: null,
  status: '',
};

const signInSlice = createSlice({
  name: 'signInSlice',
  initialState,
  reducers: {
    setSignInMail: (state, actions: PayloadAction<string>) => {
      state.signInMail = actions.payload;
    },
    setSignInPassword: (state, actions: PayloadAction<string>) => {
      state.signInPassword = actions.payload;
    },
    getSignInUser(state, actoins: PayloadAction<SignInUserPayload>) {},
    setRegistered(state, actions: PayloadAction<boolean>) {
      state.registered = actions.payload;
    },
    getUserData(state, actions: PayloadAction<undefined>) {},
    setUserData(state, actions: PayloadAction<UserMe>) {
      const { username, id } = actions.payload;
      state.username = username;
      state.idUser = id;
    },
    logoutUser(state, actions: PayloadAction<undefined>) {},
    setStatus(state, actions: PayloadAction<string>) {
      state.status = actions.payload;
    },
  },
});

export const {
  setSignInMail,
  setSignInPassword,
  getSignInUser,
  setRegistered,
  setUserData,
  getUserData,
  logoutUser,
  setStatus,
} = signInSlice.actions;
export default signInSlice.reducer;

// uxp24601@xcoxc.com.
// yws80752@nezid.com
// zgu66366@xcoxc.com
