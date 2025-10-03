import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(config);
      const data = res["data"];
      setMovies(data);
      console.log(data);

      // console.log(`${Object.keys(res)}`); 출력 결과
      // MovieDetail.jsx:28 data,status,statusText,headers,config,request

      // console.log(`${Object.keys(res["data"])}`); 출력 결과
      // adult,
      //   backdrop_path,
      //   belongs_to_collection,
      //   budget,
      //   genres,
      //   homepage,
      //   id,
      //   imdb_id,
      //   origin_country,
      //   original_language,
      //   original_title,
      //   overview,
      //   popularity,
      //   poster_path,
      //   production_companies,
      //   production_countries,
      //   release_date,
      //   revenue,
      //   runtime,
      //   spoken_languages,
      //   status,
      //   tagline,
      //   title,
      //   video,
      //   vote_average,
      //   vote_count;
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>영화 디테일</h1>
      <ul>
        {Object.entries(movies).map(([key, value]) => (
          <li key={key}>
            {key}: {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}
