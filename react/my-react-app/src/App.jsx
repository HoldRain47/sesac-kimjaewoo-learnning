import React from "react";
// import Rule from "./components/JSX/Rule";
// import Interplations from "./components/JSX/Interplation";
// import Header from "./components/JSX/Header";
// import Footer from "./components/JSX/Footer";
// 컴포넌트 불러오기
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";
import OnClick from "./components/Component/EventHandling/OnClick";
import OnChange from "./components/Component/EventHandling/OnChange";
import OnSubmit from "./components/Component/EventHandling/OnSubmit";

export default function App() {
  return (
    <div>
      {/* 컴포넌트 사용 */}
      <OnChange></OnChange>
      <OnClick></OnClick>
      <OnSubmit></OnSubmit>
    </div>
  );
}
