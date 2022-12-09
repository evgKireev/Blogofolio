import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserActivatePayload, UserPayloadType } from '../../@types/user';

const formSlice = createSlice({
  name: 'formInput',
  initialState: {
    signUpName: '',
    signUpMail: '',
    signUpPassword: '',
    signUpPasswordConfirm: '',
    status: '',
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
    registerUser: (state, actions: PayloadAction<UserPayloadType>) => {},
    activeNewUser: (state, actions: PayloadAction<UserActivatePayload>) => {},
    setIsStatus: (state, actions: PayloadAction<string>) => {
      state.status = actions.payload;
    },
  },
});

export const {
  setSignUpName,
  setSignUpMail,
  setSignUpPassword,
  setSignUpPasswordConfirm,
  registerUser,
  activeNewUser,
  setIsStatus
} = formSlice.actions;
export default formSlice.reducer;
