import { Link, useLocation } from "react-router-dom";
import s from "./MovieListItem.module.css";
const MovieListItem = ({ item }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        className={s.link}
        to={`/movies/${item.id}`}
        state={{ from: location }}
      >
        <div>
          <img
            className={s.filmPhoto}
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : "https://www.lacinefest.org/uploads/2/6/7/4/26743637/no-poster_orig.jpeg"
            }
            alt={item.title}
          />
          <p className={s.title}>{item.title}</p>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;
