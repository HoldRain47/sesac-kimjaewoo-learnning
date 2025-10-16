//이 레이아웃은 록인 사용자만 접근 가능한 레이아웃
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PrivateLayoutR() {
  //전역 상태 토큰 불러오기
  const token = useSelector((state) => state.auth.token);
  //토큰이 없으면. 즉, 로그인을 안 했으면
  if (!token) {
    return <Navigate to="/login" replace></Navigate>;
  } else {
    //토큰이 있으면 중첩된 자식 컴포넌트 렌더링
    return <Outlet></Outlet>;
  }
}
