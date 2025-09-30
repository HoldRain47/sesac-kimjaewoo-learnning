import React from "react";
//state는 모듈이 필요함
import { useState } from "react";

export default function StateBasic() {
  const [array, setArray] = useStatus([1, 2, 3]);
  function handleClick() {
    const newArray = [...array, 4];
    setArray(newArray);
    console.log("상태변겅");
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      ></button>
      {Array.map((e) => {
        <li>{e}</li>;
      })}
    </div>
  );
}
