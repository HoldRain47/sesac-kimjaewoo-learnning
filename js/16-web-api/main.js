import axios from "axios";

async function connectTest() {
  const resoponse = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  //console.log(resoponse);
  console.table(Object.entries(resoponse));
}
connectTest();
