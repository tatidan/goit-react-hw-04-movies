import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import Reviews from "../components/reviews/Reviews";
import Cast from "../components/cast/Cast";

const SEARCH_URL = "https://image.tmdb.org/t/p/w300/";

class MovieDetailsView extends Component {
  state = {
    title: "",
    release_date: null,
    runtime: 0,
    overview: "",
    genres: [],
    homepage: "",
    id: null,

    backdrop_path: null,
    //тут тоже лежит путь к постеру

    poster_path: null,
    cast: null,
    reviews: null,
    production_companies: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(this.props.match.params);

    //пока тут реальный линк======
    const URL =
      "https://api.themoviedb.org/3/movie/550?api_key=e8ee72216daf4e999abce8d8e2bbbfa9";
    const response = await axios.get(URL).then((response) => response.data);
    this.setState({ ...response });
    this.changeDateToYear();
  }

  changeDateToYear = () => {
    const yearTmp = this.state.release_date;
    const year = Number.parseInt(yearTmp);
    this.setState({ release_date: year });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.production_companies !== this.state.production_companies) {
  //     console.log(`prevState`, prevState);
  //     console.log(`this.state`, this.state);
  //     //сейчас тут лежат распыленные данные о фильме
  //     // this.fetchMovies();
  //   }
  // }

  render() {
    const {
      title,
      release_date,
      runtime,
      overview,
      poster_path,
      cast,
      id,
      reviews,
      homepage,
      production_companies,
    } = this.state;
    // const { match } = this.props;
    // const URL =
    //   "https://api.themoviedb.org/3/movie/550?api_key=e8ee72216daf4e999abce8d8e2bbbfa9";
    // console.log(URL);
    // console.log(`this.props.match`, this.props.match);
    // console.log(`match.url`, match.url);

    return (
      <>
        <h1>Это страница одного фильма</h1>

        <div className="movie__card">
          <div className="movie__posterWrapper">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
            />
          </div>

          <div className="movie__detailsWrapper">
            <h2>
              {title} ({release_date})
            </h2>
            <a href={homepage} target="_blank" rel="noreferrer">
              линк на страницу фильма
            </a>
            <p>
              <b>Runtime:</b> {runtime} minutes
            </p>
            <p>
              <b>Overview:</b> {overview}
            </p>
            <h4>Production companies:</h4>
            <ul className="movie__companies">
              {production_companies?.length > 0 &&
                production_companies.map(
                  (company) =>
                    company.logo_path && (
                      <li key={company.name}>
                        <span>
                          <img
                            className="movie__companiesLogo"
                            src={`https://image.tmdb.org/t/p/w300/${company.logo_path}`}
                            alt={company.name}
                          />
                        </span>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>

        <div className="movie__additional">
          <h3>Additional information:</h3>
          <h4>Cast</h4>
          <h4>Reviews</h4>

          <p>
            <NavLink to="https://developers.themoviedb.org/3/movies/get-movie-credits">
              {cast}
            </NavLink>
          </p>
          <p>
            <NavLink to={`/movies/:movieId`}>{reviews}</NavLink>
          </p>
        </div>

        <Route
          // "https://developers.themoviedb.org/3/movies/get-movie-credits"
          path={`movies/:movieId`}
          // render={() => <h1>Компонент Cast</h1>}
          component={Cast}
          // render={(props) => <Cast {...props} extraPropName="value" />}
          // render={props =>
          //   return <Cast {...props}
          //   authors={this.state.authors}
          //   cast={ this.state.cast}
          // />
          // }
        />
        <Route
          // "https://developers.themoviedb.org/3/movies/get-movie-reviews"
          path={`movies/:movieId`}
          render={() => <h1>Компонент Reviews</h1>}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsView;

// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
