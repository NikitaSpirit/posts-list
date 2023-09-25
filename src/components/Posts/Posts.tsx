import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_POSTS_SAGA } from "../../redux/sagas";
import { IPost } from "../../api/getPosts";
import { IState } from "../../redux/reducers";
import { UsersFilter } from "../UsersFilter";

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.posts.data);
  const isLoading = useSelector((state: IState) => state.posts.loading);

  console.log("isLoading");
  console.log(isLoading);

  useEffect(() => {
    dispatch({ type: FETCH_POSTS_SAGA });
  }, []);

  console.log("posts");
  console.log(posts);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {posts.map((post: IPost) => (
        <div key={post.id}>{post.id}</div>
      ))}
    </>
  );
};
