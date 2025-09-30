import React from "react";

export default function LoginStatus({ isLogin, userName }) {
  return (
    <div>
      <h1>로그인 상태: {isLogin ? "로그인" : "로그아웃"}</h1>
      <button className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
        {isLogin ? "로그아웃" : "로그인"}
      </button>
      <p>{isLogin ? `${userName}님 환영합니다` : "로그인 해주세요"}</p>
      <hr />
    </div>
  );
}
