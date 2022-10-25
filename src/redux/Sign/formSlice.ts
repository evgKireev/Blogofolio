import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formInput',
  initialState: {
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
