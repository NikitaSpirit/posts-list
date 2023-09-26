import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_POSTS_SAGA } from "../../redux/sagas";
import { IPost } from "../../api/getPosts";
import { IState } from "../../redux/reducers";
import { PostCard } from "../PostCard";
import { useSearchParams } from "react-router-dom";

import styles from "./index.module.scss";

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: IState) => state.posts.data);
  const isLoading = useSelector((state: IState) => state.posts.loading);
  const [searchParams] = useSearchParams();

  console.log("POSTS - searchParams", searchParams.get("userId"));

  useEffect(() => {
    dispatch({ type: FETCH_POSTS_SAGA });
  }, [dispatch]);

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
