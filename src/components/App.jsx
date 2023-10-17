import { Routes, Route } from "react-router-dom";
import SharedLayout from "../layouts/SharedLayout";
import HomePage from "../pages/HomePage";
import MoviesPageDetails from "../pages/MoviesPageDetails";
import CastPage from "../pages/CastPage";
import ReviewsPage from "../pages/ReviewsPage";
import MoviesPage from "../pages/MoviesPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="*" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesPageDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
