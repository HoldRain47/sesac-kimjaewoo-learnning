import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

export default function CounterIncrement() {
  const dispatch = useDispatch();

  function handleIncrement() {
    // 액션 생성자 함수 increment() 실행
    // 그 결과인 액션을 스토어에 전달(dispatch)
    dispatch(increment());
  }

  return (
    <div>
      <button onClick={() => handleIncrement()}>증가</button>
    </div>
  );
}
