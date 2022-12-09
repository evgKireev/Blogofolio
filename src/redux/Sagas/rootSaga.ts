import { all } from 'redux-saga/effects';
import blogsSaga from './blogSaga';
import userSaga from './userSaga';

export function* rootSaga() {
  yield all([userSaga(), blogsSaga()]);
}
