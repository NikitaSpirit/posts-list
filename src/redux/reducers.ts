import { IPost } from "../api/getPosts";
import { AxiosError } from "axios"
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions";
import { IUser } from "../api/getUsers";

const initialState = {
  posts: {
    data: [],
    loading: false,
    error: null,
  },
  users: {
    data: [],
    loading: false,
    error: null,
  },
};

export interface IState {
  posts: {
    data: IPost[],
    loading: boolean,
    error: AxiosError,
  },
  users: {
    data: IUser[],
    loading: boolean,
    error: AxiosError,
  }
}

const rootReducer = (state = initialState as any, action: any) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, posts: { ...state.posts, loading: true, error: null } };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: { ...state.posts, data: action.payload, loading: false } };
    case FETCH_POSTS_FAILURE:
      return { ...state, posts: { ...state.posts, loading: false, error: action.payload } };

    case FETCH_USERS_REQUEST:
      return { ...state, users: { ...state.users, loading: true, error: null } };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: { ...state.users, data: action.payload, loading: false } };
    case FETCH_USERS_FAILURE:
      return { ...state, users: { ...state.users, loading: false, error: action.payload } };
    default:
      return state;
  }
};

export default rootReducer;