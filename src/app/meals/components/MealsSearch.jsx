"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const MealsSearch = () => {
  const [search, setSearch] = useState("");
  const [Meals, setMeals] = useState([]);

  const router =useRouter()
  const pathname =usePathname()
  useEffect(()=>{
    const searchQuery ={search}
    const urlQueryParam =new URLSearchParams(searchQuery)
    const url =`${pathname}?${urlQueryParam}`
    router.push(url)
  },[search])
  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          value={search}
          className="border border-amber-50 p-2"
          placeholder="Search meals..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MealsSearch;
