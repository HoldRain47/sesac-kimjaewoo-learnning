import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const params = SearchParams;
    const order = params.get("order") ?? "asc";
    const sortBy = params.get("sortBy") ?? "id";
    console.log(order);
    console.log(sortBy);
    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(response.data.posts);
    }
    getPosts();
  }, [SearchParams]);

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          {" "}
          ID 오름 차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          {" "}
          ID 내림 차순
        </button>
      </div>
      <div></div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              No. {post.id} - {post.title}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}
