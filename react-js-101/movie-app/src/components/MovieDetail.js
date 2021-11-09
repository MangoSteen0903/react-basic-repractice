import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";
function MovieDetail({
  coverImg,
  title,
  year,
  rating,
  runtime,
  genres,
  description,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.meta}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.movie__info}> {year} ·</span>
          {genres.map((element, index) =>
            index !== genres.length - 1 ? (
              <span className={styles.movie__info}> {element} / </span>
            ) : (
              <span className={styles.movie__info}> {element} ·</span>
            )
          )}
          <span className={styles.movie__info}> {runtime} Minutes </span>
        </div>
        <div className={styles.rating}>
          <h1>Average★ {rating}</h1>
        </div>
        <div className={styles.user__ui}>
          <div className={styles.stars}>
            <h3>Rating</h3>
            <div>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.btn__box}>
              <i class="fas fa-plus"></i>
              <h3>Wishlist</h3>
            </div>
            <div className={styles.btn__box}>
              <i class="fas fa-pencil-alt"></i>
              <h3>Comment</h3>
            </div>
            <div className={styles.btn__box}>
              <i class="fas fa-eye"></i>
              <h3>Watching</h3>
            </div>
            <div className={styles.btn__box}>
              <i class="fas fa-ellipsis-h"></i>
              <h3>More</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieDetail;
