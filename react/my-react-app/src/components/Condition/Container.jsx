import React from "react";
import LoginStatus from "./LoginStatus";
import AdminLink from "./AdminLink";
export default function Container() {
  return (
    <div>
      <LoginStatus isLogin={false}></LoginStatus>
      <AdminLink></AdminLink>
      <LoginStatus isLogin={true} userName="김철수"></LoginStatus>
      <AdminLink isAdmin={true}></AdminLink>
    </div>
  );
}
