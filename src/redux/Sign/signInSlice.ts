import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SignInUser, UserMe } from '../../@types/user';

export const signInUser = createAsyncThunk(
  'user/signInUser',
  async ({ password, email }: SignInUser) => {
    await axios
      .post('https://studapi.teachmeskills.by/auth/jwt/create/', {
        password,
        email,
      })
      .then(({ data }) => {
        localStorage.setItem('ACCESS_TOKEN_KEY', data?.access);
        localStorage.setItem('REFRESH_TOKEN_KEY', data?.refresh);
      });
  }
);

export const getUserMe = createAsyncThunk('user/getUserMe', async () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN_KEY') || '';
  const { data } = await axios.get(
    'https://studapi.teachmeskills.by/auth/users/me/',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return data as UserMe;
});

type initialStateSignIn = {
  statusSignInUser: string;
  statusGetUser: string;
  signInMail: string;
  signInPassword: string;
  registered: boolean;
  userName: UserMe | undefined;
};

const initialState: initialStateSignIn = {
  statusSignInUser: '',
  statusGetUser: '',
  signInMail: '',
  signInPassword: '',
  registered: false,
  userName: undefined,
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
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.statusSignInUser = 'pending';
    });
    builder.addCase(signInUser.fulfilled, (state, actions) => {
      state.statusSignInUser = 'fulfilled';
      state.registered = true;
    });
    builder.addCase(signInUser.rejected, (state) => {
      state.statusSignInUser = 'rejected';
    });
    builder.addCase(getUserMe.fulfilled, (state, actions) => {
      state.userName = actions.payload;
    });
  },
});

export const { setSignInMail, setSignInPassword } = signInSlice.actions;
export default signInSlice.reducer;
