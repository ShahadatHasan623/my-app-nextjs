"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
            <Link href="/products">
              <li>products</li>
            </Link>
            <Link href="/products/add">
              <li>productsAdd</li>
            </Link>
            <Link href="/meals">
              <li>Meals</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
