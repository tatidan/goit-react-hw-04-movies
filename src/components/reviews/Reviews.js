import React, { Component } from "react";
import { searchReviews } from "../../services/ApiService";

class Reviews extends Component {
  state = {
    results: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await searchReviews(movieId).then(
      (response) => response.data.results
    );
    this.setState({ results: response });
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <ul>
          {results?.length > 0 &&
            results.map(
              ({ author, id, content }) =>
                author && (
                  <li key={id}>
                    {" "}
                    <p> {author}</p>
                    <p> {content}</p>
                  </li>
                )
            )}
        </ul>
        {/* {results || <p>There aren't any reviews for this movie yet</p>} */}
      </>
    );
  }
}

export default Reviews;
