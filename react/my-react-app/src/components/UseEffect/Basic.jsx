import React from "react";
import { useEffect, useState } from "react";
export default function Basic() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  useEffect(() => {
    console.log("의존성 배열 없음");
  });
  useEffect(() => {
    console.log("의존성 배열 있음");
  }, []);
  useEffect(() => {
    console.log("의존성 배열 1있음");
  }, [number1]);

  useEffect(() => {
    console.log("의존성 배열 2있음");
  }, [number2]);
  return (
    <div>
      <button
        onClick={() => {
          setNumber1(number1 + 1);
        }}
      >
        {number1}
      </button>
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
