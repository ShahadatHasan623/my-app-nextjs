import React from "react";

export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPost();
  return (
    <div className="grid grid-cols-4 gap-8 m-5">
      {posts.map((p) => {
        return (
          <>
            <div key={p.id}>
                <p>{p.title}</p>
                <p>{p.body}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
