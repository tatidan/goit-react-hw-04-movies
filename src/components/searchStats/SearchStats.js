import React from "react";
import sprite from "../../icons/sprite.svg";

const SearchStats = ({
  currentPage,
  totalPages,
  totalResults,
  handleLoadMore,
}) => {
  return (
    <div>
      <div className="search__totalStats">
        <p className="FullMovieList">
          <a
            className="FullMovieLink"
            //добавить якорь для плавной прокрутки
            href="#FullMovieList"
            rel="noopener noreferrer"
          >
            <b>See full movie list</b>
          </a>
        </p>
        <p className="search__totalPages">
          <b>Total pages:</b> {currentPage}/{totalPages}
        </p>
        <p className="search__totalResults">
          <b>Total results:</b> {totalResults}
        </p>

        <button
          type="button"
          className="search__button"
          onClick={handleLoadMore}
        >
          <svg className="search__icon">
            <use href={sprite + "#icon-images"}></use>
          </svg>
          Load more
        </button>
      </div>
    </div>
  );
};

export default SearchStats;
