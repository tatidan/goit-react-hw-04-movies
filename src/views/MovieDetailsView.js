import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import Reviews from "../components/reviews/Reviews";
import Cast from "../components/cast/Cast";

class MovieDetailsView extends Component {
  state = {
    title: null,
    description: null,
    genre: null,
    id: null,
    imgUrl: null,
    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await axios
      .get(`url/${bookId}_embed=cast`)
      .then((response) => response.data);
    console.log(response.data);
    this.setState({ ...response.data });
  }

  render() {
    const { title, description, genre, imgUrl, cast, reviews } = this.state;
    const { match } = this.props;
    return (
      <>
        <h1>Это страница одного фильма {match.params.bookId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{genre}</p>
        <p>{description}</p>
        {/* <p>{cast}</p>
        <p>{reviews}</p> */}

        <p>
          <NavLink to={`${match.url}/:movieId`}>{cast}</NavLink>
        </p>
        <p>
          <NavLink to={`${match.url}/:movieId`}>{reviews}</NavLink>
        </p>

        <Route
          path={`${match.path}/:movieId`}
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
          path={`${match.path}/:movieId`}
          render={() => <h1>Компонент Reviews</h1>}
          component={Reviews}
        />
      </>
    );
  }
}

export default MovieDetailsView;
