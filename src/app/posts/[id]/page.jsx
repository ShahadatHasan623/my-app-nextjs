import React from "react";

export const singlePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const p = await params;
  const signleData = await singlePost(p.id);

  return <div className="m-5">
    <p className="text-3xl font-bold">{signleData.title}</p>
    <p>{signleData.body}</p>
  </div>;
}
