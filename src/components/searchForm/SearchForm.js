import React, { Component } from "react";
import sprite from "../../icons/sprite.svg";

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.query);

    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    console.log(this.props.total_pages);

    return (
      <section className="section">
        <div className="search__wrapper">
          <form className="search__form" onSubmit={this.handleSubmit}>
            <img src="../icons/sprite.svg#icon-search" alt="" />
            <label className="label">
              <input
                className="search__input"
                onChange={this.handleChange}
                type="text"
                value={this.state.query}
                placeholder="Movie title here"
              />
            </label>
            <button className="search__button" type="submit">
              <svg className="search__icon">
                <use href={sprite + "#icon-search"}></use>
              </svg>
              Search
            </button>
          </form>

          {/* {this.props.total_pages > 1 &&
            this.props.total_results( */}
          <div className="search__totalStats">
            <p className="FullMovieList">
              <a className="FullMovieLink" href="#FullMovieList">
                <b>See full movie list</b>
              </a>
            </p>
            <p className="search__totalPages">
              <b>Total pages:</b> {this.state.total_pages}
            </p>
            <p className="search__totalResults">
              <b>Total results:</b> {this.state.total_results}
            </p>

            <button type="button" className="search__button">
              <svg className="search__icon">
                <use href={sprite + "#icon-images"}></use>
              </svg>
              Load more
            </button>
          </div>
          {/* )} */}
        </div>
      </section>
    );
  }
}

export default SearchForm;

//починить рендер по условию
//как сюда попадают пропсы?

//при false results рендерится уведомление "нет результата поиска"

// vote_average - оценка зрителей
// vote_count - всего проголовавших
// adult: false  (if true - 18+)
// backdrop_path

// "genres": [
// {
// "id": 18,
// "name": "Drama"
// }
// ],

//"imdb_id": "tt0137523"
// https://www.imdb.com/title/tt0137523/
// https://www.imdb.com/video/vi781228825?playlistId=tt0137523

// наверняка ее айди такой: tt3480822
// https://www.imdb.com/video/vi645185561?playlistId=tt3480822

// "production_countries": [
// {
// "iso_3166_1": "DE",
// "name": "Germany"
// },
// {
// "iso_3166_1": "US",
// "name": "United States of America"
// }
// ],

// "tagline": "Mischief. Mayhem. Soap.",
// "vote_average": 8.4,
// "vote_count": 22100
