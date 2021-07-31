import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import defaultImg from "../../images/movie-in-prod.jpg";

const MoviesSlider = ({ movies }) => {
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
            <Link className="TrendingMovie__link" to={`movies/${movie.id}`}>
              <img
                className="TrendingMovie__poster"
                src={
                  movie.poster_path || movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w300/${
                        movie.poster_path || movie.backdrop_path
                      }`
                    : defaultImg
                }
                alt={movie.title}
              />
            </Link>

            {movie.title ? (
              <p className="TrendingMovie__movieTitle">{movie.title}</p>
            ) : (
              <p className="TrendingMovie__movieTitle">{movie.name}</p>
            )}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default MoviesSlider;