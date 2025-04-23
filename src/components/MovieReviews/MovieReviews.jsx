import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import Loader from "../../Loader/Loader";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const review = await getMovieReviews(movieId);
        setReviews(review.data.results);
      } catch (error) {
        console.error("Failed to create reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && reviews.length === 0 && (
        <p className={s.noReviews}>No reviews available for this movie.</p>
      )}
      {!isLoading && reviews.length > 0 && (
        <ul className={s.reviewsList}>
          {reviews.map((item) => (
            <li key={item.id} className={s.reviewItem}>
              <p className={s.author}>{item.author}</p>
              <p className={s.content}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
