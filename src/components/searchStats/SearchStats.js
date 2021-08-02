import React from "react";
import sprite from "../../icons/sprite.svg";
import ScrollDownBtn from "../ScrollDownBtn/ScrollDownBtn";

const SearchStats = ({
  currentPage,
  totalPages,
  totalResults,
  handleLoadMore,
}) => {
  return (
    <div>
      <div className="search__totalStats">
        <a
          className="FullMovieList"
          href="#FullMovieList"
          rel="noopener noreferrer"
        >
          <ScrollDownBtn />
        </a>

        <span className="search__totalPages">
          <b>Pages loaded:</b> {currentPage} of {totalPages}
        </span>
        <span className="search__totalResults">
          <b>Total matches:</b> {totalResults}
        </span>

        {totalPages > 1 && (
          <button
            type="button"
            className="loadMoreBtn"
            onClick={handleLoadMore}
          >
            <svg className="search__icon">
              <use href={sprite + "#icon-images"}></use>
            </svg>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchStats;
