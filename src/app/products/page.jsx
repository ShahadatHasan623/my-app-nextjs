import React from "react";

export const dynamic ="force-dynamic"
export default async function ProductsPage() {
  const res = await fetch("https://my-app-shop-nine.vercel.app/api/items");
  const data = await res.json();

  return (
    <div>
      {data.data.map((item) => (
        <div key={item._id}>
          <h2>{item.productName}</h2>
        </div>
      ))}
    </div>
  );
}
