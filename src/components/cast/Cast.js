import React, { Component } from "react";
import { Route } from "react-router-dom";

class Cast extends Component {
  state = {
    //books: [],
  };

  componentDidMount() {
    console.log("did mount");
    console.log(Number(this.props.match.params.authorId));
    const id = Number(this.props.match.params.authorId);
    console.log(this.props.authors);

    const author = this.props.authors.find((author) => author.id === id);
    console.log(author);
    //author можно дестр{books} и получить books
    //this.setState({ books: books });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update");
  //   console.log(Number(this.props.match.params.authorId));
  //   console.log(this.props.authors);
  // }

  render() {
    return (
      <>
        <h1>Компонент Cast</h1>
        <Route
          path="/movies/:movie.id"
          render={() => <h3>Компонент карточка фильма</h3>}
        />
      </>
    );
  }
}

export default Cast;
