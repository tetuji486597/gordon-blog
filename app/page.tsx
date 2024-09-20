"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import BlogPost from "./components/BlogPost";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋,
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Gordon</span>.
        </span>
      </p>
      <BlogPost title="What I learned this Sunday 9/15/24"
                description="check it out!"
                imgSrc="/Jesus.jpg"
                href="/jesus"></BlogPost>
    </main>
  );
}
