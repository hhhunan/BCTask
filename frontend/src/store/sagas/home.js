import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  GET_USER_TYPES_REQUEST,
  GET_USER_TYPES_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
} from '../actions/home';
import Api from '../../api';

function* handleGetUserList() {
  try {
    const { data } = yield call(Api.usersList);
    yield put({
      type: GET_USERS_LIST_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
  }
}

function* handleGetUserTypes() {
  try {
    const { data } = yield call(Api.userTypes);
    yield put({
      type: GET_USER_TYPES_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
  }
}

function* handleCreateUser(action) {
  try {
    const { data } = yield call(Api.createUser, action.payload.data);
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
    yield put({
      type: CREATE_USER_FAIL,
    });
  }
}

function* handleDeleteUser(action) {
  try {
    yield call(Api.deleteUser, action.payload.id);
    yield put({
      type: DELETE_USER_SUCCESS,
      payload: {},
    });
  } catch (e) {
    console.warn(e);
  }
}

function* handleGetSingleUser(action) {
  try {
    const { data } = yield call(Api.getSingleUser, action.payload.id);
    yield put({
      type: GET_USER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.warn(e);
  }
}
export default function* watcher() {
  yield takeLatest(GET_USERS_LIST_REQUEST, handleGetUserList);
  yield takeLatest(GET_USER_TYPES_REQUEST, handleGetUserTypes);
  yield takeLatest(CREATE_USER_REQUEST, handleCreateUser);
  yield takeLatest(DELETE_USER_REQUEST, handleDeleteUser);
  yield takeLatest(GET_USER_REQUEST, handleGetSingleUser);
}
