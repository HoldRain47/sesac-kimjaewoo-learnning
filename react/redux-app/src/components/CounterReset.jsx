import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../store/counterSlice";
export default function CounterReset() {
  const dispatch = useDispatch();
  function resetfunc() {
    dispatch(reset());
  }
  return <button onClick={() => resetfunc()}>리셋</button>;
}
