import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getDetail = useCallback(async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(detail);
    setDetail(detail.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getDetail();
  }, [getDetail]);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          coverImg={detail.medium_cover_image}
          title={detail.title}
          year={detail.year}
          rating={detail.rating}
          runtime={detail.runtime}
          genres={detail.genres}
          description={detail.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
