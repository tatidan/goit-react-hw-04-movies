import React, { Component } from "react";
import PauseHoverSlider from "../slider/Slider";
import { fetchMovies } from "../../services/ApiService";

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
          <PauseHoverSlider movies={this.state.movies} />
        </ul>
      </section>
    );
  }
}

export default TrendingMovieList;
