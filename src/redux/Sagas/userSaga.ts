import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../@types/constant';
import { activeNewUser, registerUser, setIsStatus } from '../Sign/signUpSlice';
import API from '../utils/API';
import callCheckingUser from './callCheckingUser';
import {
  ResetPasswordUserPayload,
  SignInUserPayload,
  UserActivatePasswordPayload,
  UserActivatePayload,
  UserPayloadType,
} from '../../@types/user';
import {
  getUserData,
  setRegistered,
  getSignInUser,
  setUserData,
  logoutUser,
  setStatus,
  resetPasswordInUser,
  setStatusResetPassword,
  activatePasswordInUser,
} from '../Sign/signInSlice';
import { toast } from 'react-toastify';

function* registerUserWorker(actions: PayloadAction<UserPayloadType>) {
  yield put(setIsStatus('pending'));
  const { data: registerData, callback } = actions.payload;
  const { ok } = yield call(API.registerUser, registerData);
  if (ok) {
    yield put(setIsStatus(''));
    callback();
  } else {
    yield put(setIsStatus('rejected'));
    toast.error('Error while registering');
  }
}

function* activatNewUserWorker(actions: PayloadAction<UserActivatePayload>) {
  yield put(setIsStatus('pending'));
  const { data, callback } = actions.payload;
  const { ok, problem } = yield call(API.fechActivteNewUser, data);
  if (ok) {
    yield put(setIsStatus(''));
    callback();
  } else {
    yield put(setIsStatus('rejected'));
    console.warn(problem);
  }
}

function* signInUserWorker(actions: PayloadAction<SignInUserPayload>) {
  yield put(setStatus('pending'));
  const { data: singInUserData, callback } = actions.payload;
  const { data, ok, problem } = yield call(API.signInUser, singInUserData);
  if (ok && data) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data?.refresh);
    yield put(setRegistered(true));
    callback();
    yield put(setStatus(''));
  } else {
    yield put(setStatus('rejected'));
    toast.error('Error while sign in: ', problem);
  }
}

function* getUserMeWorker() {
  const { data, ok } = yield callCheckingUser(API.getUserMe);
  if (ok && data) {
    yield put(setUserData(data));
  } else {
    toast.error('Error while getting user info');
  }
}

function* logoutUserWorker() {
  yield put(setRegistered(false));
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

function* resetPasswordUserWorker(
  actions: PayloadAction<ResetPasswordUserPayload>
) {
  yield put(setStatusResetPassword('pending'));
  const { email } = actions.payload;
  const { ok } = yield call(API.resetPasswordUser, email);
  if (ok) {
    yield put(setStatusResetPassword('fullfiled'));
  } else {
    toast.error('Error while reset password');
  }
}

function* activatPassUserWorker(
  actions: PayloadAction<UserActivatePasswordPayload>
) {
  const { data, callback } = actions.payload;
  const { ok, problem } = yield call(API.ActivteNewPasswordUser, data);
  if (ok) {
    toast.success('reset password successfully');
    callback();
  } else {
    toast.error(`${problem}`);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activeNewUser, activatNewUserWorker),
    takeLatest(getSignInUser, signInUserWorker),
    takeLatest(getUserData, getUserMeWorker),
    takeLatest(logoutUser, logoutUserWorker),
    takeLatest(resetPasswordInUser, resetPasswordUserWorker),
    takeLatest(activatePasswordInUser, activatPassUserWorker),
  ]);
}
