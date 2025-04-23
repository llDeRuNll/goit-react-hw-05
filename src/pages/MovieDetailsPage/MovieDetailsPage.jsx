import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import s from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? "/");
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log("Details:", error);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <div className={s.loading}>Loading...</div>;

  return (
    <div className={s.wrapper}>
      <Link to={goBackRef.current} state={{ from: location.pathname }}>
        Back to Home
      </Link>
      <section className={s.details}>
        <img
          className={s.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
          }
          alt={movie.title}
        />
        <div className={s.info}>
          <h1>{movie.title}</h1>
          <p className={s.score}>User Score: {Math.ceil(movie.vote_average)}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
        </div>
        <hr />
        <nav className={s.navLinks}>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
          >
            Show Cast
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
          >
            Show Review
          </NavLink>
        </nav>

        <Outlet />
      </section>
    </div>
  );
};

export default MovieDetailsPage;
