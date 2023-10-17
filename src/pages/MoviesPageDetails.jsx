import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/getMovieDetails";

const MoviesPageDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.original_title}</h1>
          <p>{movie.tagline}</p>
          <div className="flex gap-6 text-yellow-500">
            <Link
              className={`hover:underline ${
                location.pathname === `/movies/${movieId}/cast`
                  ? "underline"
                  : ""
              }`}
              to="cast">
              Cast
            </Link>
            <Link
              className={`hover:underline ${
                location.pathname === `/movies/${movieId}/reviews`
                  ? "underline"
                  : ""
              }`}
              to="reviews">
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};
export default MoviesPageDetails;
