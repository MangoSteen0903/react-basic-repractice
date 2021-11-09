import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.main_container}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.main_container}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
