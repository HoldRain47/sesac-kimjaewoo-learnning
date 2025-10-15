import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

export default function CounterIncrementByAmount() {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }

  function handleChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div>
      <input type="number" value={amount} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleIncrementByAmount()}>증가</button>
    </div>
  );
}
