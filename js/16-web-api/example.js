import axios from "axios";

//도메인 주소
const BASE_URL = "https://dummyjson.com/";

const testRoute = async () => {
  // fetch("https://dummyjson.com/test")
  //   .then((res) => res.json())
  //   .then(data => console.log(data));
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data.data);
};

//testRoute();

async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  console.log(data);
  console.table(Object.entries(response["data"]));
}

getAllProducts();
