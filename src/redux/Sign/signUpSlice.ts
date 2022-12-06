import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserActivateType, UserType } from '../../@types/user';

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

export const activatNewUser = createAsyncThunk(
  'user/activatNewUser',
  async ({ uid, token }: UserActivateType) => {
    await axios.post(
      'https://studapi.teachmeskills.by/auth/users/activation/',
      {
        uid,
        token,
      }
    );
  }
);

const formSlice = createSlice({
  name: 'formInput',
  initialState: {
    statusAddNewUser: '',
    statusActivatNewUser: '',
    signUpName: '',
    signUpMail: '',
    signUpPassword: '',
    signUpPasswordConfirm: '',
  },
  reducers: {
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
      state.statusAddNewUser = 'pending';
    });
    builder.addCase(addNewUser.fulfilled, (state) => {
      state.statusAddNewUser = 'fulfilled';
    });
    builder.addCase(addNewUser.rejected, (state) => {
      state.statusAddNewUser = 'rejected';
    });
    builder.addCase(activatNewUser.pending, (state) => {
      state.statusActivatNewUser = 'pending';
    });
    builder.addCase(activatNewUser.fulfilled, (state) => {
      state.statusActivatNewUser = 'fulfilled';
    });
    builder.addCase(activatNewUser.rejected, (state) => {
      state.statusActivatNewUser = 'rejected';
    });
  },
});

export const {
  setSignUpName,
  setSignUpMail,
  setSignUpPassword,
  setSignUpPasswordConfirm,
} = formSlice.actions;
export default formSlice.reducer;
