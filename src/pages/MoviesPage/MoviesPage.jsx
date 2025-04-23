import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { searchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../Loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchFilms = async () => {
      try {
        const results = await searchMovie(query);
        setMovies(results.data.results);
      } catch (error) {
        console.log("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, [query]);

  const handleSubmit = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList items={movies} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default MoviesPage;
