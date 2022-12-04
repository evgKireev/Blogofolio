import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType } from '../../@types/user';

export const addNewUser = createAsyncThunk(
  'user/addNewUser',
  async ({ username, email, password }: UserType) => {
    await axios.post('https://studapi.teachmeskills.by/auth/users/', {
      username,
      email,
      password,
    });
  }
);

const formSlice = createSlice({
  name: 'formInput',
  initialState: {
    status: '',
    signInMail: '',
    signInPassword: '',
    signUpName: '',
    signUpMail: '',
    signUpPassword: '',
    signUpPasswordConfirm: '',
  },
  reducers: {
    setSignInMail: (state, actions: PayloadAction<string>) => {
      state.signInMail = actions.payload;
    },

    setSignInPassword: (state, actions: PayloadAction<string>) => {
      state.signInPassword = actions.payload;
    },

    setSignUpName: (state, actions: PayloadAction<string>) => {
      state.signUpName = actions.payload;
    },
    setSignUpMail: (state, actions: PayloadAction<string>) => {
      state.signUpMail = actions.payload;
    },
    setSignUpPassword: (state, actions: PayloadAction<string>) => {
      state.signUpPassword = actions.payload;
    },
    setSignUpPasswordConfirm: (state, actions: PayloadAction<string>) => {
      state.signUpPasswordConfirm = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
    });
    builder.addCase(addNewUser.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const {
  setSignInMail,
  setSignInPassword,
  setSignUpName,
  setSignUpMail,
  setSignUpPassword,
  setSignUpPasswordConfirm,
} = formSlice.actions;
export default formSlice.reducer;
