import React, { Component } from "react";
import { fetchMovies } from "../../services/ApiService";
import MoviesSlider from "../moviesSlider/MoviesSlider";

class TrendingMovieList extends Component {
  state = {
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movies === this.state.movies) {
      fetchMovies().then((response) => {
        this.setState({ movies: response.data.results });
      });
    }
  }

  render() {
    return (
      <section className="section">
        <h1 className="section__title">Trending today</h1>

        <ul className="TrendingMovie__list">
          <MoviesSlider movies={this.state.movies} />
        </ul>
      </section>
    );
  }
}

export default TrendingMovieList;
