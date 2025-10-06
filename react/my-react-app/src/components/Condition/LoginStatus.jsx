import React from "react";

export default function LoginStatus({ isLogin, userName }) {
  return (
    <div>
      {/* 삼항연산자를 사용해서 표현 */}
      {/* 삼항연산자 문법 - 조건식 ? "참일 때 요소" : "거짓일 때 요소" */}
      {/* isLogin 이 참이면 "로그인 상태" */}
      {/* isLogin 이 거짓이면 "비 로그인 상태" */}
      {/* 조건식 : isLogin === true */}
      <p>로그인 상태 : {isLogin === true ? "로그인 상태" : "비 로그인 상태"}</p>
      {/* button 태그 내부에 삼항연산자를 작성한다. */}
      {/* 조건식은 isLogin이 참(true) 이라면 이다 */}
      {/* 만약 참이면 문자열 "로그아웃" 생성 */}
      {/* 만약 거짓이면 문자열 "로그인" 생성 */}
      <button>{isLogin === true ? "로그아웃" : "로그인"} </button>

      {/* 만약 isLogin이 true 라면 `${userName}님 환영합니다` */}
      {/* 만약 isLogin이 false 이라면 `로그인 해주세요` */}
      <p>
        {isLogin === true ? `${userName}님 환영합니다.` : "로그인 해주세요"}
      </p>
    </div>
  );
}
