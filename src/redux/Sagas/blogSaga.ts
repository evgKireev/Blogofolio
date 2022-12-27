import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  GetBlogsPayload,
  IDataForm,
  IDeleteDataForm,
  IEditDAtaForm,
} from '../../@types/cards';
import {
  getBlogs,
  getMyBlogs,
  setBlog,
  setBlogs,
  setIsLoading,
  setMyBlogs,
  setpoginationCount,
} from '../blogsSlice';
import {
  deleteFormData,
  editFormData,
  getFormData,
  setstatusAddPost,
} from '../home/inputSlice';
import API from '../utils/API';
import callCheckingUser from './callCheckingUser';

function* getBlogsWorker(actions: PayloadAction<GetBlogsPayload>) {
  yield put(setIsLoading('pending'));
  const { offset, search, ordering } = actions.payload;
  const { data, ok, problem } = yield call(
    API.fechGetBlogs,
    offset,
    search,
    ordering
  );
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

function* onSevPostWorker(actions: PayloadAction<IDataForm>) {
  yield put(setstatusAddPost('pending'));
  const { formData, callback } = actions.payload;
  const { ok, problem } = yield callCheckingUser(API.newPost, formData);
  if (ok) {
    callback();
    yield put(setstatusAddPost('fullfild'));
    toast.success('Post added successfully');
  } else {
    toast.error('Error adding new post');
    yield put(setstatusAddPost('rejected'));
  }
}

function* onEditPostWorker(actions: PayloadAction<IEditDAtaForm>) {
  const { formData, callback, id } = actions.payload;
  const { ok, problem } = yield callCheckingUser(API.editPost, formData, id);
  if (ok) {
    callback();
    toast.success('Post edited  successfully');
  } else {
    toast.error('Error editing post');
  }
}

function* onDeletePostWorker(actions: PayloadAction<IDeleteDataForm>) {
  const { id, callback } = actions.payload;
  console.log(id);
  const { ok, problem } = yield callCheckingUser(API.deletePost, id);
  if (ok) {
    callback();
    toast.success('Post deleted successfully');
  } else {
    toast.error('Error fetching post');
  }
}

export default function* blogsSaga() {
  yield all([
    takeLatest(getBlogs, getBlogsWorker),
    takeLatest(getMyBlogs, getMyBlogWorker),
    takeLatest(getFormData, onSevPostWorker),
    takeLatest(editFormData, onEditPostWorker),
    takeLatest(deleteFormData, onDeletePostWorker),
  ]);
}
