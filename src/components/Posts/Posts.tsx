import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_POSTS_SAGA } from "../../redux/sagas";
import { IPost } from "../../api/getPosts";
import { IState } from "../../redux/reducers";
import { PostCard } from "../PostCard";

import styles from "./index.module.scss";

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.posts.data);
  const isLoading = useSelector((state: IState) => state.posts.loading);

  useEffect(() => {
    dispatch({ type: FETCH_POSTS_SAGA });
  }, []);
  console.log("isLoading");
  console.log(isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.postsContainer}>
      {posts.map((post: IPost) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
