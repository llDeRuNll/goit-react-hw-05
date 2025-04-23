import MovieListItem from "../MovieListItem/MovieListItem";
import s from "./MovieList.module.css";

const MovieList = ({ items }) => {
  return (
    <div>
      <ul className={s.list}>
        {items.map((item) => (
          <MovieListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
