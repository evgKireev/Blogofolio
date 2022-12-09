import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getBlogs, setBlogs, setIsLoading } from '../blogsSlice';
import API from '../utils/API';

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

export default function* blogsSaga() {
  yield all([takeLatest(getBlogs, getBlogsWorker)]);
}
