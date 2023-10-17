import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex bg-slate-800 gap-6 p-2 text-lg">
      <Link
        className={`text-red-400 ${
          location.pathname === "/" ? "underline" : ""
        }`}
        to="/">
        Home
      </Link>
      <Link
        className={`text-red-400 ${
          location.pathname.startsWith("/movies") ? "underline" : ""
        }`}
        to="/movies">
        Movies
      </Link>
    </nav>
  );
}

export default Navbar;
