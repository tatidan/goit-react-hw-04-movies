import React from "react";
import { Link } from "react-router-dom";

const FullMovieList = ({ movies }) => {
  return (
    <>
      <ul className="FullMovieList__list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className="FullMovieList__link" to={`movies/${movie.id}`}>
              {movie.title ? (
                <span className="FullMovieList__movieTitle">
                  {movie.title}
                  {movie.release_date && (
                    <>
                      <span> (</span> {Number.parseInt(movie.release_date)}
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
    </>
  );
};

export default FullMovieList;
