import axios from "axios";

const API_KEY = "e8ee72216daf4e999abce8d8e2bbbfa9";
// const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_BASE_URL;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      API_URL + "/trending/all/week?api_key=" + API_KEY
    );
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//на место query в 20й нужно распылить options
export const fetchQueryMovies = async (query) => {
  try {
    const response = await axios.get(
      API_URL +
        "/search/movie?language=en-US&include_adult=false&page=1&api_key=" +
        API_KEY +
        "&query=" +
        query
    );

    //"page": 1,
    //"results": [],
    //"total_pages": 11,
    //"total_results": 212

    return response;
  } catch (error) {
    console.log(error.message);
  }
};
// https://api.themoviedb.org/3/search/movie?api_key=e8ee72216daf4e999abce8d8e2bbbfa9&language=en-US&query=widow&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&page=1&api_key=e8ee72216daf4e999abce8d8e2bbbfa9widow
// // for search
// //
// https://api.themoviedb.org/3/search/movie?
// //api_key = e8ee72216daf4e999abce8d8e2bbbfa9 &
// language = en - US &
// include_adult = false
// page = 1 &
// //query = widow &

// "https://api.themoviedb.org/3/trending/all/day?api_key=e8ee72216daf4e999abce8d8e2bbbfa9"
// `${API_URL}/trending/all/day?api_key=${API_KEY}`

// "https://api.themoviedb.org/3/trending/all/day?api_key=e8ee72216daf4e999abce8d8e2bbbfa9"
