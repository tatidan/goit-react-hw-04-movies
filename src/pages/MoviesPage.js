import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchForm from "../components/searchForm/SearchForm";
import MoviesSlider from "../components/moviesSlider/MoviesSlider";
import { searchMovies } from "../services/ApiService";

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      searchMovies({ query: this.state.searchQuery }, this.options).then(
        ({ data }) => {
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

  openMovieDetails = (e) => {
    console.log("переход на страницу одного фильма");
  };

  render() {
    // console.log(this.props.match.url);
    //тут лежит /movies

    return (
      <>
        <SearchForm
          onSubmit={this.onChangeQuery}
          total_pages={this.state.total_pages}
          total_results={this.state.total_results}
        />
        {this.state.movies.length > 1 && (
          <section className="section">
            <MoviesSlider
              movies={this.state.movies}
              onClick={this.openMovieDetails}
            />
          </section>
        )}
        <Route
          path="/movies/:movie.id"
          render={() => <h3>Компонент карточка фильма</h3>}
        />
      </>
    );
  }
}

export default MoviesPage;

// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
