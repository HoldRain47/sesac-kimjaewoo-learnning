import React from "react";

// Container 컴포넌트에
// LoginStatus 컴포넌트를 불러와서
// <div> 태그 사이에 2개의 LoginStatus를 배치
import LoginStatus from "./LoginStatus";

// AdminLink 컴포넌트를 불러와서
// LoginStatus 컴포넌트 아래에 배치
import AdminLink from "./AdminLink";
export default function Container() {
  return (
    <div>
      {/* 첫 번째 컴포넌트에는 isLogin 속성에 true 전달 */}
      {/* userName 속성의 값 "홍길동" 전달 */}
      <LoginStatus isLogin={true} userName="홍길동"></LoginStatus>
      {/* 두 번째 컴포넌트에는 isLogin 속성에 false 전달 */}
      {/* userName 속성의 값 "김철수" 전달 */}
      <LoginStatus isLogin={false} userName="김철수"></LoginStatus>

      {/* isAdmin 속성에 데이터 true 전달 */}
      <AdminLink isAdmin={true}></AdminLink>
      {/* isAdmin 속성에 데이터 false 전달 */}
      <AdminLink isAdmin={false}></AdminLink>
    </div>
  );
}
