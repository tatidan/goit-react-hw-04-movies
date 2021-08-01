import React, { Component } from "react";
import { searchReviews } from "../../services/ApiService";
import ScrollUpButton from "../ScrollUpBtn/ScrollUpBtn";

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

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <ul className="reviews__list" id="ReviewsList">
          {results?.length > 0 &&
            results.map(
              ({ author, id, content }) =>
                author && (
                  <li key={id}>
                    <b className="reviews__title"> {author}:</b>
                    <p className="reviews__content">
                      {" "}
                      <span>"</span> {content} <span>"</span>
                    </p>
                  </li>
                )
            )}
        </ul>
        {/* {results || <p>There aren't any reviews for this movie yet</p>} */}
        <ScrollUpButton />
      </>
    );
  }
}

export default Reviews;
