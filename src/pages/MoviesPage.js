import React, { Component } from "react";
import { Route } from "react-router-dom";
import SearchForm from "../components/searchForm/SearchForm";
import MoviesSlider from "../components/moviesSlider/MoviesSlider";
import { searchMovies } from "../services/ApiService";
import MovieDetailsPage from "./MovieDetailsPage";
import FullMovieList from "../components/fullMovieList/FullMovieList";
// import { withRouter } from "react-router";

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
      // this.props.history.push({ search: this.state.searchQuery });
      //при такой записи ?avatar
      //нужно ?query=avatar
      //и повторный axios.get, когда по кнопке переход назад на movies

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
    if (e.currentTarget === e.target) {
      console.log("переход на страницу одного фильма");
    }
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
            <FullMovieList movies={this.state.movies} />
          </section>
        )}
        <Route
          path="/movies/:movieId"
          component={MovieDetailsPage}
          exact={false}
        />
      </>
    );
  }
}

export default MoviesPage;
