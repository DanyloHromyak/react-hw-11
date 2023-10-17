import axios from "axios";

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${import.meta.env.VITE_API_KEY}`
  );
  return response.data.results;
};
