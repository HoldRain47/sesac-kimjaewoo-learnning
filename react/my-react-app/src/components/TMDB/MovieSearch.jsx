import React from "react";

export default function MovieSearch() {
  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `/movie/popular`,
        params: {
          page: 1,
        },
      };

      const res = await axiosInstance(config);
      setMovies(res["data"]["results"]);
    }

    fetchData();
  }, []);

  return <div>MovieSearch</div>;
}
