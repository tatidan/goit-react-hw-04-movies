import React, { Component } from "react";
import { fetchMovies } from "../../services/ApiService";
import MoviesSlider from "../MoviesSlider/MoviesSlider";
import Section from "../Section/Section";

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
      <Section>
        <h1 className="section__title">Trending today</h1>
        <MoviesSlider movies={this.state.movies} />
      </Section>
    );
  }
}

export default TrendingMovieList;
