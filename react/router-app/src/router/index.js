// src/router/index.js

// createBrowserRouter 함수 불러오기
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
]);

// 라우터 내보내기
export default router;
