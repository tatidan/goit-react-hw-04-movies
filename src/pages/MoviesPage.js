import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesSlider from "../components/MoviesSlider/MoviesSlider";
import { searchMovies } from "../services/ApiService";
import MovieDetailsPage from "./MovieDetailsPage";
import FullMovieList from "../components/FullMovieList/FullMovieList";
// import { withRouter } from "react-router";
import queryString from "query-string";

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

  //NOTIFICATION: "найдено Х совпадений", BTN: "загрузить больше?""
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
        {this.state.movies.length > 1 && (
          <>
            {this.state.movies.length > 0 ? (
              <>
                <section className="section">
                  <MoviesSlider movies={this.state.movies} />
                </section>
                <FullMovieList movies={this.state.movies} />
              </>
            ) : (
              <p>No movies found. Please try again.</p>
            )}
            {/* рендер одного фильма работает некорректно */}
          </>
        )}
        {/* {
          (this.state.movies.length = 1 && (
            <>
              <FullMovieList movies={this.state.movies} />
              <p>должен быть сразу переход на MovieDetailsPage</p>
            </>
          ))
        }
        {this.state.movies.length < 1 && (
          <>
            <p>Movie not found, please try again </p>
          </>
        )} */}
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
