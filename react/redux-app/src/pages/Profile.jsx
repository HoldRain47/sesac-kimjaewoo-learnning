import { useSelector } from "react-redux";

import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//액션 실행을 위한 액션 생성자 함수와 useDisatch 훅
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
    //로그아웃이 성공했다면 토큰이 null이 된다.
  }

  const token = useSelector((state) => state.auth.token);

  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();

  //로그인 확인
  useEffect(() => {
    //로그인 됐다면 사용자 정보
    if (token) {
      setDecodeToken(jwtDecode(token));
      //로그인 안했다면 로그인 페이지로
    } else {
      //navigate("/login");
    }
  }, [token]); //useEffect 의존성 배열에 token 추가

  return (
    <div>
      <div>{token ? token : "로그인 해주세요"}</div>
      <div>{decodeToken ? `${decodeToken.email}` : "로그인 해주세요"}</div>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
