import React, { Component } from "react";
import SearchForm from "../components/searchForm/SearchForm";
import PauseHoverSlider from "../components/slider/Slider";
import { fetchQueryMovies } from "../services/ApiService";

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

  options = {
    language: "en-US",
    include_adult: false,
    page: 1,
  };

  //мы видим page=1, как с остальными? по кнопке?
  //NOTIFICATION: "найдено Х совпадений", BTN: "загрузить больше?""
  //по кнопке новый фетч и дорендерить, куда, в слайдер?
  //тогда логичнее пагинация с нумерацией страниц
  //в didUpdate добавить check page

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      fetchQueryMovies(this.state.searchQuery).then(({ data }) => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
          total_results: data.total_results,
        });
        this.options.query = this.state.searchQuery;
      });
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
    // console.log(this.props.match.url);
    //тут лежит /movies

    return (
      <>
        <SearchForm
          onSubmit={this.onChangeQuery}
          total_pages={this.total_pages}
          total_results={this.total_results}
        />
        {this.state.movies.length > 1 && (
          <section className="section">
            <PauseHoverSlider movies={this.state.movies} />
          </section>
        )}
      </>
    );
  }
}

export default MoviesPage;

// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

//   /* <Route
//   path="/movies/:movie.id"
//   render={() => <h3>Компонент карточка фильма</h3>}
// /> */

// к слайдеру можно добавить кнопку "список фильмов"
// и переключаться между слайдером и списком? или дополн?
