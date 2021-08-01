import React from "react";
import { Link, withRouter } from "react-router-dom";
import ScrollUpButton from "../ScrollUpBtn/ScrollUpBtn";
import sprite from "../../icons/sprite.svg";

const FullMovieList = ({ movies, location }) => {
  return (
    <>
      <ul className="FullMovieList__list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className="FullMovieList__link"
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <svg className="FullMovieList__icon">
                <use href={sprite + "#icon-video-camera"}></use>
              </svg>
              {movie.title ? (
                <span className="FullMovieList__movieTitle">
                  {movie.title}
                  {movie.release_date && (
                    <>
                      <span> (</span>
                      {Number.parseInt(movie.release_date)}
                      <span>)</span>
                    </>
                  )}
                </span>
              ) : (
                <span className="FullMovieList__movieTitle">
                  {movie.name}
                  {movie.release_date && (
                    <>
                      <span> (</span> {Number.parseInt(movie.release_date)}
                      <span>)</span>
                    </>
                  )}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <ScrollUpButton />
    </>
  );
};

export default withRouter(FullMovieList);
