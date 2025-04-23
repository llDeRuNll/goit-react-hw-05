import axios from "axios";

const API_KEY = "7593da56d6670090329ecc1505998d0d";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTkzZGE1NmQ2NjcwMDkwMzI5ZWNjMTUwNTk5OGQwZCIsIm5iZiI6MTc0NTMwNzI5Mi40Nywic3ViIjoiNjgwNzQ2OWNiNmM2M2QyNzBmYWE3OThlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.56Lk85Chd52ord9pSROjXRhoHh00w-rHLVZGxuJHHz8",
  },
};
export const getTrendMovies = async () => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    options
  );
};
export const getMovieDetails = async (movieId) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    options
  );
};
export const searchMovie = async (query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
};
export const getMovieCredits = async (movieId) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
    options
  );
};
export const getMovieReviews = async (movieId) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
};
