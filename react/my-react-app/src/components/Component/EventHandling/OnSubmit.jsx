import React from "react";
export default function OnSubmit() {
  const handleSubmit = (event) => {
    // e["target"]["elements"] : form 요소의 입력 요소들(submit은 form에서만 사용가능하다)
    const elements = event["target"]["elements"];

    // 구조 분해 할당을 활용한 각 요소를 변수에 할당
    const { email, password, name } = elements;

    console.log(`이메일 입력 값: ${email["value"]}`);
    console.log(`비밀번호 입력 값: ${password["value"]}`);
    console.log(`이름 입력 값: ${name["value"]}`);

    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="w-7x1 border-4 border-amber-300"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="w-7x1 border-4 border-amber-300"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="w-7x1 border-4 border-amber-300"
          type="text"
          name="name"
          placeholder="Name"
        />
        <button
          className="cursor-pointer border-2 p-2 bg-blue-400 text-white shadow m-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
