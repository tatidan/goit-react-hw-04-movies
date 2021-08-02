import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { searchMovies } from "../../services/ApiService";
import SearchStats from "../SearchStats/SearchStats";
import sprite from "../../icons/sprite.svg";

class SearchForm extends Component {
  state = {
    query: "",
    page: 1,
    newMovies: [],
  };

  handleChange = (e) => {
    this.reset();
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });

    // this.reset();
  };

  handleLoadMore = (e) => {
    e.currentTarget === e.target &&
      this.setState({ page: this.state.page + 1 });

    const { page, query } = this.state;
    searchMovies({ page: page, query: query }).then(({ data }) => {
      console.log(data);
      this.setState({ newMovies: [...this.state.newMovies, ...data.results] });

      console.log(this.state.newMovies);
      console.log(this.state.page);
    });
  };
  // в массиве NewMovies лежат все фильмы подгруженные по LoadMore
  //нужно их в movies поднять наверх, на MoviesPage. КАК?

  reset = () => {
    this.setState({ query: "", page: 1 });
  };

  render() {
    const { total_results, total_pages } = this.props;

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
                autoFocus
                value={this.state.query}
                placeholder="Movie title here"
              />
            </label>
            {this.state.query && (
              <button className="loadMoreBtn" type="submit">
                <svg className="search__icon">
                  <use href={sprite + "#icon-search"}></use>
                </svg>
                Search
              </button>
            )}
          </form>

          {total_pages >= 1 && (
            <SearchStats
              currentPage={this.state.page}
              totalPages={total_pages}
              totalResults={total_results}
              handleLoadMore={this.handleLoadMore}
            />
          )}
        </div>
      </section>
    );
  }
}

export default withRouter(SearchForm);

//как и когда очистить input value?

// adult: false  (if true - 18+)

//поиск по фамилии актера
//https://api.themoviedb.org/3/search/person?api_key=e8ee72216daf4e999abce8d8e2bbbfa9&language=en-US&query=depp&page=1&include_adult=false
// results - known_for - title
// это путь к фильму
// known_for это фильмография актера
// отдельно на уровне с known_for есть свойство "known_for_department": "Acting",
//"name": "Johnny Depp",
//"profile_path": "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg"

// поиск фильма pretty woman = /search/movie
// https://api.themoviedb.org/3/search/movie?api_key=e8ee72216daf4e999abce8d8e2bbbfa9&language=en-US&query=pretty%20woman&page=1&include_adult=false

// поиск каста фильма
// https://api.themoviedb.org/3/movie/550/credits?api_key=e8ee72216daf4e999abce8d8e2bbbfa9&language=en-US
//550 - это /movie/{movie_id}/credits
