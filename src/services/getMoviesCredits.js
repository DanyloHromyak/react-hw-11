import axios from "axios";

export const getMoviesCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${import.meta.env.VITE_API_KEY}`);
  return response.data;
};
