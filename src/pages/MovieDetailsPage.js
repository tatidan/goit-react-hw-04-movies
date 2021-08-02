import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { searchMovieDetails } from "../services/ApiService";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import MovieCard from "../components/MovieCard/MovieCard";
import Section from "../components/Section/Section";

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
    history.push(location.state?.from || "/movies");
  };

  render() {
    const movieDetails = this.state;

    return (
      <>
        <Section>
          <GoBackButton handleGoBack={this.handleGoBack} />
          <MovieCard movieDetails={movieDetails} />
        </Section>

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
