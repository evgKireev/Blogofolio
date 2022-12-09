import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../@types/constant';
import {
  SignInUserPayload,
  UserActivatePayload,
  UserPayloadType,
} from '../../@types/user';
import {
  getUserData,
  setRegistered,
  setSignInUser,
  setUserData,
  logoutUser,
  setStatus,
} from '../Sign/signInSlice';
import { activeNewUser, registerUser, setIsStatus } from '../Sign/signUpSlice';
import API from '../utils/API';
import callCheckingUser from './callCheckingUser';

function* registerUserWorker(actions: PayloadAction<UserPayloadType>) {
  yield put (setIsStatus('pending'))
  const { data: registerData, callback } = actions.payload;
  const { ok, problem } = yield call(API.registerUser, registerData);
  if (ok) {
    yield put (setIsStatus(''))
    callback();
  } else {
    yield put (setIsStatus('rejected'))
    console.warn(problem);
  }
}

function* activatNewUserWorker(actions: PayloadAction<UserActivatePayload>) {
  yield put (setIsStatus('pending'))
  const { data, callback } = actions.payload;
  const { ok, problem } = yield call(API.fechActivteNewUser, data);
  if (ok) {
    yield put (setIsStatus(''))
    callback();
  } else {
    yield put (setIsStatus('rejected'))
    console.warn(problem);
  }
}

function* signInUserWorker(actions: PayloadAction<SignInUserPayload>) {
  yield put(setStatus('pending'))
  const { data: singInUserData, callback } = actions.payload;
  const { data, ok, problem } = yield call(API.signInUser, singInUserData);
  if (ok && data) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data?.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data?.refresh);
    yield put(setStatus(''))
    yield put(setRegistered(true));
    callback();
  } else {
    yield put(setStatus('rejected'))
    console.warn(problem);
  }
}

function* getUserMeWorker(actions: PayloadAction<any>) {
  const { data, ok, problem } = yield callCheckingUser(API.getUserMe);
  if (ok && data) {
    yield put(setUserData(data.username));
  } else {
    console.warn(problem);
  }
}

function* logoutUserWorker() {
  yield put(setRegistered(false));
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export default function* userSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(activeNewUser, activatNewUserWorker),
    takeLatest(setSignInUser, signInUserWorker),
    takeLatest(getUserData, getUserMeWorker),
    takeLatest(logoutUser, logoutUserWorker),
  ]);
}
