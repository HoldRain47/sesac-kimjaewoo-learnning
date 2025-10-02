import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function Component() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/...`, // API 요청 URL
        // 요청 헤더
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        // 요청 쿼리 파라미터
        params: {
          language: "ko-KR",
        },
      };

      const res = await axios(config); // API 요청
      const data = res["data"]; // 응답 객체에서 데이터 속성 추출

      setMovies(data["results"]);
    }

    fetchData();
  }, []);

  return <div></div>;
}
