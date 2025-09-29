import React from "react";

export default function OnChange() {
  // 이벤트 핸들러의 event 객체는 이벤트 정보를 저장하고 있다.
  const handleChange = (event) => {
    console.log(event["target"]["value"]);
  };

  function handleNumberChange(event) {
    let eventVal = event["target"]["value"];
    if (eventVal < 10) console.log("10보다 작은 수 입니다");
  }

  return (
    <div>
      <input
        type="text"
        className="w-7x1 border-4 border-amber-300"
        onChange={(event) => handleChange(event)}
      />
      <input
        type="number"
        className="w-7x1 border-4 border-amber-300"
        onChange={(event) => handleNumberChange(event)}
      />
    </div>
  );
}
