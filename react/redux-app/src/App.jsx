import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterIncrement from "./components/CounterIncrement";
import CounterIncrementByAmount from "./components/CounterIncrementByAmount";
import CounterReset from "./components/CounterReset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter></Counter>
      <CounterIncrement></CounterIncrement>
      <CounterIncrementByAmount></CounterIncrementByAmount>
      <CounterReset></CounterReset>
    </>
  );
}

export default App;
