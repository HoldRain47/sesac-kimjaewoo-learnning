import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

export default function RequestData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("<https://dummyjson.com/posts>");
      setPosts(response["data"]["posts"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Product key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
