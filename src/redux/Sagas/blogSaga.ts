import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  getBlogs,
  getMyBlogs,
  setBlogs,
  setIsLoading,
  setMyBlogs,
} from '../blogsSlice';
import API from '../utils/API';
import callCheckingUser from './callCheckingUser';

function* getBlogsWorker() {
  yield put(setIsLoading('pending'));
  const { data, ok, problem } = yield call(API.fechGetBlogs);
  if (ok) {
    yield put(setIsLoading('fullfild'));
    yield put(setBlogs(data.results));
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
