import React from "react";
export default function OnClick() {
  // 파라미터가 없는 함수
  function helloClick() {
    alert("클릭!");
  }
  // 파라미터가 있는 함수
  function helloParamClick(param) {
    alert(`${param}`);
  }

  return (
    <div>
      {/* 카멜케이스로 이벤트 속성을 작성 */}
      {/* 함수를 호출할 때에는 html문서에서 자바스크립트를 사용할 수 있게 해주느 보간법을 사용한다 */}
      <button
        className="cursor-pointer border-2 p-2 bg-blue-400 text-white shadow m-1"
        onClick={() => helloParamClick()}
      >
        화살표 함수 클릭
      </button>
      {/* 화살표 함수 대신에 아래 코드를 사용해도 되지만 우리는 사용하지 않는다. */}
      {/* <button onClick ={ handleClick }클릭></button> */}
    </div>
  );
}
