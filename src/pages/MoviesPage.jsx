import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getSearchingMovies } from "../services/getSearchingMovies";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data, isLoading } = useQuery(
    ["searchMovies", query],
    () => getSearchingMovies(query),
    { enabled: !!query }
  );

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <input
        type="search"
        name="query"
        placeholder="Search shows by title"
        defaultValue={query}
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
