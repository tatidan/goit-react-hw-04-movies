import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
// import GoBackButton from "../components/GoBackButton/GoBackButton";
import { searchMovieDetails } from "../services/ApiService";
import sprite from "../icons/sprite.svg";
import defaultImg from "../images/movie-in-prod.jpg";

class MovieDetailsPage extends Component {
  state = {
    title: "",
    release_date: null,
    runtime: 0,
    overview: "",
    genres: [],
    adult: false,
    imdb_id: null,
    vote_average: null,
    vote_count: null,
    homepage: "",
    id: null,
    tagline: null,
    backdrop_path: null,
    poster_path: null,
    production_companies: null,
    production_countries: null,
    language: "en-US",
  };
  options = {
    language: "en-US",
    adult: false,
    page: 1,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await searchMovieDetails(movieId).then(
      (response) => response.data
    );
    this.setState({ ...response });
    this.changeDateToYear();
  }

  changeDateToYear = () => {
    const year = Number.parseInt(this.state.release_date);
    this.setState({ release_date: year });
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push("/movies");
    // history.push(location?.state?.from || "/movies");
  };

  render() {
    const {
      title,
      release_date,
      runtime,
      overview,
      poster_path,
      imdb_id,
      vote_average,
      vote_count,
      tagline,
      adult,
      genres,
      homepage,
      production_companies,
      production_countries,
    } = this.state;

    return (
      <>
        <section className="section">
          <button
            type="button"
            onClick={this.handleGoBack}
            className="goBackBtn"
          >
            Go back
          </button>
          {/* <GoBackButton /> */}
          <div className="movie__card">
            <div className="movie__posterWrapper">
              {/* {poster_path && ( */}
              <img
                className="movie__poster"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title}
              />
              {/* )} */}
              {tagline && (
                <p>
                  <b>Tagline:</b> {tagline}
                </p>
              )}

              <p className="movie__outerLinks">
                <a
                  href={homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="movie__outerlink"
                >
                  Movie page
                </a>
                <span> </span>
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="movie__outerlink"
                >
                  Trailer
                </a>
              </p>
            </div>

            <div className="movie__detailsWrapper">
              <h2>
                {/* {title} {!!release_date && (<span>(</span> release_date <span>)</span>)} */}
                {title} {!!release_date && release_date}
              </h2>
              <p className="movie__rates">
                {!adult && <span>R</span>}
                <b> * </b> {runtime} mins
                <b> * </b>
                {vote_average >= 8 && (
                  <>
                    <svg className="NavLink__icon">
                      <use href={sprite + "#icon-star-full"}></use>
                    </svg>
                    {vote_average} / 10 <b> * Votes:</b> {vote_count}
                  </>
                )}
                {vote_average < 8 && vote_average > 5 && (
                  <>
                    <svg className="NavLink__icon">
                      <use href={sprite + "#icon-star-half"}></use>
                    </svg>
                    {vote_average} / 10 <b> * Votes:</b> {vote_count}
                  </>
                )}
                {vote_average <= 5 && (
                  <>
                    <svg className="NavLink__icon">
                      <use href={sprite + "#icon-star-empty"}></use>
                    </svg>
                    {vote_average} / 10 <b> * Votes:</b> {vote_count}
                  </>
                )}
                {!vote_average && !vote_count && <span>Unrated</span>}
                <b> * </b>
                {genres?.length > 0 &&
                  genres.map(
                    ({ name, id }) => name && <span key={id}>{name}</span>
                  )}
              </p>
              <p className="movie__overview">
                <b>Overview:</b> {overview}
              </p>

              {production_companies === null && <h4>Production companies:</h4>}
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
              {production_countries === null && <b>Production countries:</b>}
              <ul className="movie__countries">
                {production_countries?.length > 0 &&
                  production_countries.map(
                    ({ name, iso_3166_1 }) =>
                      name && (
                        <li className="movie__country" key={iso_3166_1}>
                          {name}
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>
        </section>

        <div className="movie__additional ">
          <h3 className="additional">Additional information:</h3>

          <Link
            to={`${this.props.match.url}/credits`}
            className="additional__tab"
          >
            Cast
          </Link>
          <Link
            to={`${this.props.match.url}/reviews`}
            className="additional__tab"
          >
            Reviews
          </Link>
        </div>
        <div className="section sectionNoBottom"></div>
        <Route path="/movies/:movieId/credits" component={Cast} exact={false} />

        <Route
          path="/movies/:movieId/reviews"
          component={Reviews}
          exact={false}
        />
      </>
    );
  }
}

export default MovieDetailsPage;

// back to the list of movies
