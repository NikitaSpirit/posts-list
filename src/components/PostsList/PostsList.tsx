import React, { useEffect } from "react";
import { getPosts } from "../../api/getPosts";

export const PostsList: React.FC = () => {
  const getData = async () => {
    const res = await getPosts();
    console.log(res?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>PostsList</div>;
};
