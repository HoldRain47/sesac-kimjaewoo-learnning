import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}
