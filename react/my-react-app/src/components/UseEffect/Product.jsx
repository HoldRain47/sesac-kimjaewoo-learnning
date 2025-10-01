import React from "react";
//개별상품데이터가 저장된 객체
// src/components/DataFetching/Post.jsx

export default function Product({ post }) {
  return (
    <li key={post.id}>
      No. {post.id} {post.title}
    </li>
  );
}
