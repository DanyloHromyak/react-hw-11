import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <form>
      <input
        type="search"
        name="query"
        placeholder="Search shows by title"
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Searchbar;
