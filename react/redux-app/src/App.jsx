import Counter from "./components/Counter";
import CounterIncrement from "./components/CounterIncrement";
import CounterIncrementByAmount from "./components/CounterIncrementByAmount";
export default function App() {
  return (
    <div>
      <Counter></Counter>
      <CounterIncrement></CounterIncrement>
      <CounterIncrementByAmount></CounterIncrementByAmount>
    </div>
  );
}
