import { AxiosError } from "axios";
import { IPost } from "../api/getPosts";
import { IUser } from "../api/getUsers";
import  { IComment } from "../api/getCommentsByPostId";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_POST_COMMENTS_REQUEST = "FETCH_POST_COMMENTS_REQUEST";
export const FETCH_POST_COMMENTS_SUCCESS = "FETCH_POST_COMMENTS_SUCCESS";
export const FETCH_POST_COMMENTS_FAILURE = "FETCH_POST_COMMENTS_FAILURE";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});
export const fetchPostsSuccess = (posts: IPost[]) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});
export const fetchPostsFailure = (error: AxiosError) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = (users: IUser[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error: AxiosError) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// export const fetchPostCommentsRequest = () => ({
//   type: FETCH_POST_COMMENTS_REQUEST,
// });
// export const fetchPostCommentsSuccess = (users: IComment[]) => ({
//   type: FETCH_POST_COMMENTS_SUCCESS,
//   payload: users,
// });
// export const fetchPostCommentsFailure = (error: AxiosError) => ({
//   type: FETCH_POST_COMMENTS_FAILURE,
//   payload: error,
// });