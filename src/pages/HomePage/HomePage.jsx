import { useEffect, useState } from "react";
import { getTrendMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await getTrendMovies();
        setTrendMovies(data.results);
      } catch (error) {
        console.log("result_error:", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>The highest rated films</h1>
      <MovieList items={trendMovies} />{" "}
    </div>
  );
};

export default HomePage;
