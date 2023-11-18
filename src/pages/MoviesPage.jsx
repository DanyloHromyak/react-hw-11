import { useQuery } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getSearchingMovies } from "../services/getSearchingMovies";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const { data, isLoading } = useQuery(["searchMovies", submittedQuery], () =>
    getSearchingMovies(submittedQuery), { enabled: !!submittedQuery }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <input
        type="search"
        name="query"
        placeholder="Search shows by title"
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoComplete="off"
        className="border-2 border-gray-950 p-1 mr-2"
      />
      <button type="submit">Search</button>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
export default MoviesPage;
