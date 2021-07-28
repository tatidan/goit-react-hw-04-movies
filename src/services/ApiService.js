import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ApiKEY = "e8ee72216daf4e999abce8d8e2bbbfa9";

const fetchMovies = async ({ searchQuery = "" }) => {
  try {
    const { movie_Id } = this.props.match.params;
    const searchURL = `/movie/{movie_id}?api_key=${ApiKEY}`;

    return await axios.get(searchURL).then((response) => response.data.hits);
  } catch (error) {
    console.log(error);
  }
};

export default { fetchMovies };

//  https://api.themoviedb.org/3/movie/550?api_key=e8ee72216daf4e999abce8d8e2bbbfa9
