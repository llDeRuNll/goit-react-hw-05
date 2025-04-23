import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import Loader from "../../Loader/Loader";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={s.castWrapper}>
        {cast.map((item) => (
          <li key={item.id} className={s.Item}>
            <p>
              <span className={s.nameSpan}>{item.name}</span> as{" "}
              {item.character}
            </p>
            <img
              className={s.Image}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s"
              }
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
