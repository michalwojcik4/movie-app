import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};