import axios from "axios";
const BASE_URL = "https://dummyjson.com";
async function addProduct() {
  const URL = "https://dummyijson.com/products/add";

  const METHOD = "POST";

  const body = {
    title: "갤럭시1",
    category: "스마트폰",
  };
  //axios요청에서 요청의 부가정보로 헤더(header)가 필요하다
  //"content-type" : 요청 본문(body)의 데이터형식(확장자) 서버가 처리할 수 있는 데이터형식인지 확인차 보내는 데이터

  const headers = { "content-type": "application/json" };

  //axios에서 본문은 data이다.(다른곳은 body)
  const config = {
    url: URL,
    method: METHOD,
    headers: headers,
    data: body,
  };

  const response = await axios(config);

  console.log(response);
}

addProduct();
