import { Component } from "react";
import { fetchMovies } from "../services/ApiService";
import TrendingMovieList from "../components/TrendingMovieList/TrendingMovieList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetchMovies().then((response) => {
      this.setState({ movies: response.data.results });
    });
  }

  render() {
    return (
      <>
        <TrendingMovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
