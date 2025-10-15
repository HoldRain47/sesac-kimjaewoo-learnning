import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // 전역 상태 token 가져오기
  const { token } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (token) {
      alert("이미 로그인 상태입니다.");
      // React Router를 사용한다면 다른 페이지로 이동시킬 수 있다
      // navigate("/profile");
    }
  }, [token]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
