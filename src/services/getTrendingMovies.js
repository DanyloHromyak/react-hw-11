import axios from 'axios';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`,
  );
  return response.data.results;
}