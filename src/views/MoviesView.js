import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import sprite from "../icons/sprite.svg";

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const URL =
      "https://api.themoviedb.org/all/movie?api_key=e8ee72216daf4e999abce8d8e2bbbfa9";
    const response = await axios
      .get(URL)
      // .get("https://developers.themoviedb.org/3/movies/get-movie-details")
      .then((response) => response.data);
    console.log(response);
    // console.log(response.data);
    // this.setState({ movies: response.data });
  }

  //!!!!! --- линк сейчас указан для страницы одного фильма

  render() {
    console.log(this.props.match.url);

    return (
      <>
        <div className="search__field">
          <img src="../icons/sprite.svg#icon-search" alt="" />
          <label className="label">
            <input
              className="search__input"
              type="text"
              placeholder="Movie title here"
            />
          </label>
          <button className="search__button" type="submit">
            <svg className="search__icon">
              <use href={sprite + "#icon-search"}></use>
            </svg>
            Search
          </button>
        </div>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.title}>
              <NavLink to={`${this.props.match.url}/get-movie-details`}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesView;

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
