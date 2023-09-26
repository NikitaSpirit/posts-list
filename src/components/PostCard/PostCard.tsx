import React, { useState, useEffect } from "react";
import { IPost } from "../../api/getPosts";
import { IComment } from "../../api/getCommentsByPostId";
import styles from "./index.module.scss";
import { getCommentsByPostId } from "../../api/getCommentsByPostId";

interface PostCardProps {
  post: IPost;
}
interface PostCommentProps {
  comment: IComment;
}

const PostComment: React.FC<PostCommentProps> = ({ comment }) => {
  const { name } = comment;
  return <div>{name}</div>;
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, body } = post;
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState<IComment[] | []>([]);
  const [areCommentsLoading, setAreCommentsLoading] = useState(false);

  const getComments = async () => {
    setAreCommentsLoading(true);
    const res = await getCommentsByPostId(id);
    setAreCommentsLoading(false);
    setComments(res);
  };
  useEffect(() => {
    if (!isExpanded) return;

    getComments();
  }, [isExpanded]);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.postCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      {isExpanded && (
        <>
          <p className={styles.commentsTitle}>Comments:</p>
          {areCommentsLoading ? (
            <p>Comments are loading...</p>
          ) : (
            comments.map((comment) => <PostComment comment={comment} />)
          )}
        </>
      )}
      <div className={styles.expand} onClick={toggleExpand}>
        {isExpanded ? "Close comments ⇑" : " Expand ⇓"}
      </div>
    </div>
  );
};
