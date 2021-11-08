import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, coverImg, title, year, rating }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={`/movie/${id}`}>
          <img className={styles.img} src={coverImg} alt={title} />
        </Link>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>
          <Link className={styles.link} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <h3 className={styles.meta}>{year}</h3>
        <span className={styles.meta}>평균★ {rating}</span>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
