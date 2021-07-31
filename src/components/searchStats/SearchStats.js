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
        <span className="FullMovieList">
          <a
            className="FullMovieLink"
            //добавить якорь для плавной прокрутки
            href="#FullMovieList"
            rel="noopener noreferrer"
          >
            <b>See full movie list</b>
          </a>
        </span>
        <span className="search__totalPages">
          <b>Pages loaded:</b> {currentPage} of {totalPages}
        </span>
        <span className="search__totalResults">
          <b>Total matches:</b> {totalResults}
        </span>

        <button type="button" className="loadMoreBtn" onClick={handleLoadMore}>
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
