import React from "react";
import sprite from "../../icons/sprite.svg";

function ScrollDownBtn() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <button type="button" onClick={handleScroll} className="loadMoreBtn">
      <svg className="search__icon">
        <use href={sprite + "#icon-list2"}></use>
      </svg>
      See full movie list
    </button>
  );
}

export default ScrollDownBtn;
