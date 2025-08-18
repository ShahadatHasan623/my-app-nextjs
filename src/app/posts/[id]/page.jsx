import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params}) {
  // read route params
  const { id } = await params
 
  // fetch data
  const singlePost= await getSinglePost(id)
 
  
 
  return {
    title: singlePost.title,
    description:singlePost.body
  }
}
 


export default async function SinglePost({ params }) {
  const p = await params;
  const signleData = await getSinglePost(p.id);

  return <div className="m-5">
    <p className="text-3xl font-bold">{signleData.title}</p>
    <p>{signleData.body}</p>
  </div>;
}
