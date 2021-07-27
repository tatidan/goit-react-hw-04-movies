import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get("url").then((response) => response.data);
    console.log(response.data);
    this.setState({ movies: response.data });
  }

  render() {
    console.log(this.props.match.url);

    return (
      <>
        <h1>Это страница movies</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.title}>
              <NavLink to={`{this.props.match.url}/${movie.id}`}>
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
