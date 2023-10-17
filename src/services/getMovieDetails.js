import axios from "axios";

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`);
  return response.data;
};
