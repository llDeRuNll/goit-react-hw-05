import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <p className={s.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className={s.subtext}>
        It might have been moved, deleted... or maybe it never existed 👻
      </p>
      <Link to="/" className={s.button}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
