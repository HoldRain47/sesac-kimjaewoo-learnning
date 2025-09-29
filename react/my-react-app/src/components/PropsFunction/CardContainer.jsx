//import Profile from ".Profile";
import Card from "./components/PropsFucntion/Card";
export default function CardContainer() {
  function handleClick(user) {
    alert("클릭!");
  }
  const user = {
    name: "홍길동",
    age: 20,
  };
  return (
    <div>
      <Card user={user} onClickProps={handleClick}></Card>
    </div>
  );
}
