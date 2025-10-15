import { useSelector } from "react-redux";

// 자식 컴포넌트 불러오기
import CounterIncrement from "./CounterIncrement";
import CounterIncrementByAmount from "./CounterIncrementByAmount";
import CounterReset from "./CounterReset";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div>전역 상태 Count: {count}</div>
    </div>
  );
}
