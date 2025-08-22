"use client"

import { useRouter } from "next/navigation";

export default function ProductAddForm() {  
  const router =useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const productName =form.productName.value;
    const payload={productName}

    const res = await fetch ("https://my-app-shop-nine.vercel.app/api/items",{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "content-type":"application/json"
      },
    })
    const result =await res.json()
    form.reset();
    router.push("/products")
    // router.refresh()
  };

  return (
    <div className="flex justify-center mt-15">
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" id="name" placeholder="product name" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
