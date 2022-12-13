import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { GetBlogsPayload } from '../../@types/cards';
import {
  getBlogs,
  getMyBlogs,
  setBlogs,
  setIsLoading,
  setMyBlogs,
  setpoginationCount,
} from '../blogsSlice';
import API from '../utils/API';
import callCheckingUser from './callCheckingUser';

function* getBlogsWorker(actions: PayloadAction<GetBlogsPayload>) {
  yield put(setIsLoading('pending'));
  const { offset, search } = actions.payload;
  const { data, ok, problem } = yield call(API.fechGetBlogs, offset, search);
  if (ok) {
    yield put(setIsLoading('fullfild'));
    yield put(setBlogs(data.results));
    yield put(setpoginationCount(data.count));
  } else {
    yield put(setIsLoading('rejected'));
    console.warn(problem);
  }
}

function* getMyBlogWorker() {
  const { data, ok, status, problem } = yield callCheckingUser(API.getMyBlogs);
  if (ok) {
    yield put(setMyBlogs(data));
  } else {
    if (status === 400) {
      yield put(setMyBlogs([]));
    }
    console.warn(problem);
  }
}

export default function* blogsSaga() {
  yield all([
    takeLatest(getBlogs, getBlogsWorker),
    takeLatest(getMyBlogs, getMyBlogWorker),
  ]);
}
