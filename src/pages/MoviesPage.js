import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesSlider from "../components/MoviesSlider/MoviesSlider";
import { searchMovies } from "../services/ApiService";
import MovieDetailsPage from "./MovieDetailsPage";
import FullMovieList from "../components/FullMovieList/FullMovieList";
import queryString from "query-string";
import Section from "../components/Section/Section";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
    isLoading: false,
    error: null,
    page: null,
    total_pages: null,
    total_results: null,
  };

  //movies нужно менять постранично тут, в state
  options = {
    language: "en-US",
    adult: false,
    page: 1,
  };

  //loadMore дорендерить в слайдер путем передачи в movies NewMovies
  //в didUpdate добавить check page

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams?.query) {
      this.onChangeQuery(queryParams.query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      searchMovies({ query: this.state.searchQuery }, this.options).then(
        ({ data }) => {
          if (data.results.length === 1) {
            this.props.history.push({
              pathname: `/movies/${data.results[0].id}`,
            });
            return;
          }
          this.setState({
            movies: data.results,
            total_pages: data.total_pages,
            total_results: data.total_results,
          });
          this.options.query = this.state.searchQuery;
        }
      );
    }
  }

  // addNewMovies - забирать в searchForm newMovies

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      movies: [],
      error: null,
    });
  };

  render() {
    return (
      <>
        <SearchForm
          onSubmit={this.onChangeQuery}
          total_pages={this.state.total_pages}
          total_results={this.state.total_results}
        />

        <>
          {this.state.movies.length > 0 && this.state.searchQuery ? (
            <>
              <Section>
                <MoviesSlider movies={this.state.movies} />
              </Section>
              <FullMovieList movies={this.state.movies} />
            </>
          ) : (
            this.state.searchQuery && (
              <p className="notification">No movies found. Please try again.</p>
            )
          )}
        </>

        <Route
          path={`${this.props.match.url}/:movieId`}
          component={MovieDetailsPage}
          exact={false}
        />
      </>
    );
  }
}

export default MoviesPage;
