import React from "react";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({ username: "", age: 0, email: "" });
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  function handleChange(event) {
    if (target["name"] === "username") {
      // 입력이 발생한 이벤트의 요소의 name과 value
      const { name, value } = event.target;

      // 입력이 발생한 요소의 상태만 변경
      setForm({ ...form, [name]: value });
    }
    if (target["name"] === "age") {
    }
    if (target["name"] === "email") {
    }
  }
  return (
    <div>
      <form action="">
        {/* value는 사용자입력값이며, 여기에 상태변수값을 넘긴다. */}
        <input
          type="text"
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
          name="username"
          value={form["username"]}
        />
        <input
          type="number"
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
          name="age"
          value={form["age"]}
        />
        <input
          type="email"
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
          name="email"
          value={form["email"]}
        />
      </form>
    </div>
  );
}
