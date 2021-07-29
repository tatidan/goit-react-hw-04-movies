import React from "react";
import { Slide } from "react-slideshow-image";
import { NavLink } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";

const PauseHoverSlider = ({ movies }) => {
  const fadeProperties = {
    duration: 2000,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };

  return (
    <div className="slide-container">
      <Slide {...fadeProperties}>
        {movies.map((movie) => (
          <div className="each-fade" key={movie.id}>
            <div className="TrendingMovie__wrapper">
              <NavLink
                className="TrendingMovie__link"
                to={`/movies/${movie.id}`}
              >
                {movie.poster_path && (
                  <img
                    className="TrendingMovie__poster"
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </NavLink>
            </div>
            <p className="TrendingMovie__movieTitle">{movie.title}</p>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default PauseHoverSlider;
