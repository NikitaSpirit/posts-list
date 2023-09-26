import React, { useState } from "react";
import { IPost } from "../../api/getPosts";
import styles from "./index.module.scss";

interface PostCardProps {
  post: IPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const { title, body } = post;
  return (
    <div className={styles.postCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.expand} onClick={toggleExpand}>
        {isExpanded ? "Close comments ⇑" : " Expand ⇓"}
      </div>
    </div>
  );
};
