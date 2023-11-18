import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/getTrendingMovies.js";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="px-3 py-2">
      <h1 className="text-2xl font-semibold">Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
