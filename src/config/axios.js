import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.authorization = `Bearer ${import.meta.env.VITE_API_KEY}`;
