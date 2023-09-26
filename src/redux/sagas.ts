import { all, takeEvery, put, call } from "redux-saga/effects";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchUsersSuccess,
} from "./actions";
import { getPosts } from "../api/getPosts";
import { getUsers } from "../api/getUsers";
import { AxiosError } from "axios";
import { IPost } from "../api/getPosts";
import { IUser } from "../api/getUsers";

interface IFetchPostsSaga {
  userIds: number[];
}
function* fetchPostsSaga(payload: IFetchPostsSaga): any {
  try {
    yield put(fetchPostsRequest());
    const data: IPost[] = yield getPosts(payload.userIds);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error as AxiosError));
  }
}
function* fetchUsersSaga(): any {
  try {
    yield put(fetchPostsRequest());
    const data: IUser[] = yield call(getUsers);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error as AxiosError));
  }
}

export const FETCH_POSTS_SAGA = 'FETCH_POSTS_SAGA';
export const FETCH_USERS_SAGA = 'FETCH_USERS_SAGA';
function* watchFetchData() {
  // @ts-ignore
  yield takeEvery(FETCH_POSTS_SAGA, fetchPostsSaga);
  yield takeEvery(FETCH_USERS_SAGA, fetchUsersSaga);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}