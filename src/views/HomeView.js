import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    //пока тут реальный линк======
    const response = await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=e8ee72216daf4e999abce8d8e2bbbfa9"
      )
      .then((response) => response.data.results);
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
    // console.log(this.props);
    console.log(movies);
    return (
      <>
        <h1>Trending today</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink
                to={`/movies/${movie.id}`}
                //https://api.themoviedb.org/3/movie/508943?api_key=e8ee72216daf4e999abce8d8e2bbbfa9&language=en-US
              >
                {movie.title} {movie.id}
                <img
                  className="TrendingMovie__poster"
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        <Route
          path="/movies/:movie.id"
          render={() => <h3>Компонент карточка фильма</h3>}
        />
      </>
    );
  }
}

export default HomeView;

// https://developers.themoviedb.org/3/trending/get-trending
// //- список самых популярных фильмов на сегодня для создания
// //коллекции на главной странице.
