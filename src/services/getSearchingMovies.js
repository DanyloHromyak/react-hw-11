import axios from "axios";

export const getSearchingMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
  );
  return response.data.results;
};
