import axios from "axios";

async function putProduct() {
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "put",
    headers: { "content-Type": "application/json" },
    data: { title: "아이폰1" },
  };
  const response = await axios(config);
}

putProduct();
console.log(response);
