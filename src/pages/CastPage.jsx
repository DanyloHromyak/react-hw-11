import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesCredits } from "../services/getMoviesCredits";

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviesCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.length === 0 ? (
        <p>We don&apos;t have any cast for this movie.</p>
      ) : (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <p>{cast.name}</p>
              <p className="text-green-600">Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CastPage;
