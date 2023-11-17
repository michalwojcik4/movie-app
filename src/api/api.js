import axios from 'axios';
import { useCallback } from 'react';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const useMovieAPI = () => {
  const getTrendingMovies = useCallback(async page => {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  const searchMovies = useCallback(async (query, page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getMovieDetails = useCallback(async movieId => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getMovieCast = useCallback(async movieId => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getMovieReviews = useCallback(async movieId => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    getTrendingMovies,
    searchMovies,
    getMovieDetails,
    getMovieCast,
    getMovieReviews,
  };
};
