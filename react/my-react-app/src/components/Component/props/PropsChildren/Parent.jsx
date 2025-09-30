import React from "react";

import Child from "./Child";
export default function Paarent() {
  return (
    <div>
      <Child>
        <h1>제목</h1>
        <span>날짜</span>
        <p>글</p>
      </Child>
      <Child>
        <h1>제목</h1>
        <span>날짜</span>
        <p>글</p>
      </Child>
      <Child>
        <h1>제목</h1>
        <span>날짜</span>
        <p>글</p>
      </Child>
    </div>
  );
}
