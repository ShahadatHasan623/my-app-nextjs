import Link from "next/link";
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
            <div key={p.id} className="border-2 border-slate-50 p-4">
              <p className="text-2xl font-extrabold space-y-1 mb-4">{p.title}</p>
              <p>{p.body}</p>
              <Link href={`posts/${p.id}`}>
                <button className="bg-green-400 px-4 py-2 text-black rounded-xl hover:bg-green-800">Details</button>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
}
