import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_BASE_URL;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      API_URL + "/trending/all/week?api_key=" + API_KEY
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async ({ language, adult, page, query }) => {
  try {
    const SearchURL =
      API_URL +
      "/search/movie?" +
      "language=" +
      language +
      "&include_adult=" +
      adult +
      "&page=" +
      page +
      "&api_key=" +
      API_KEY +
      "&query=" +
      query;

    const response = await axios.get(SearchURL);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchMovieDetails = async (movieId) => {
  try {
    const SearchURL = API_URL + "/movie/" + movieId + "?api_key=" + API_KEY;

    const response = await axios.get(SearchURL);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchCast = async (movieId) => {
  try {
    const SearchURL =
      API_URL + "/movie/" + movieId + "/credits?api_key=" + API_KEY;

    const response = await axios.get(SearchURL);

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchReviews = async (movieId) => {
  try {
    const SearchURL =
      API_URL + "/movie/" + movieId + "/reviews?api_key=" + API_KEY;

    const response = await axios.get(SearchURL);

    return response;
  } catch (error) {
    console.log(error.message);
  }
};
