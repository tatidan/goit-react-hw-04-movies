import React from "react";
import sprite from "../../icons/sprite.svg";
import defaultImg from "../../images/movie-in-prod.jpg";

const getIcon = (vote_average) => {
  if (vote_average <= 5) {
    return "#icon-star-empty";
  }
  if (vote_average < 8 && vote_average > 5) {
    return "#icon-star-half";
  }
  if (vote_average >= 8) {
    return "#icon-star-full";
  }
};

const MovieCard = ({
  movieDetails: {
    poster_path,
    tagline,
    title,
    release_date,
    adult,
    vote_count,
    vote_average,
    genres,
    overview,
    homepage,
    runtime,
    imdb_id,
    production_companies,
    production_countries,
  },
}) => {
  return (
    <>
      <div className="movie__card">
        <div className="movie__posterWrapper">
          <img
            className="movie__poster"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : defaultImg
            }
            alt={title}
          />
          {tagline && (
            <p>
              <b>Tagline:</b> {tagline}
            </p>
          )}

          <p className="movie__outerLinks">
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              className="movie__outerlink"
            >
              Movie page
            </a>
            <span> </span>
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="movie__outerlink"
            >
              Trailer
            </a>
          </p>
        </div>

        <div className="movie__detailsWrapper">
          <h2>
            {title} {!!release_date && release_date}
          </h2>
          <p className="movie__rates">
            {!adult && <span>R</span>}
            <b> * </b>
            {runtime.length && (
              <>
                {runtime} mins <b> * </b>
              </>
            )}
            {vote_average && vote_count ? (
              <>
                <svg className="NavLink__icon">
                  <use href={sprite + getIcon(vote_average)}></use>
                </svg>
                {vote_average} / 10 <b> * Votes:</b> {vote_count}
              </>
            ) : (
              <span>Unrated</span>
            )}
            <b> * </b>
            {genres?.length > 0 &&
              genres.map(
                ({ name, id }) => name && <span key={id}>{name}</span>
              )}
          </p>
          <p className="movie__overview">
            <b>Overview:</b> {overview}
          </p>

          {!!production_companies?.length && <h4>Production companies:</h4>}
          <ul className="movie__companies">
            {production_companies?.length > 0 &&
              production_companies.map(
                (company) =>
                  company.logo_path && (
                    <li key={company.name}>
                      <span>
                        <img
                          className="movie__companiesLogo"
                          src={`https://image.tmdb.org/t/p/w300/${company.logo_path}`}
                          alt={company.name}
                        />
                      </span>
                    </li>
                  )
              )}
          </ul>
          {!!production_countries?.length && <b>Production countries:</b>}
          <ul className="movie__countries">
            {production_countries?.length > 0 &&
              production_countries.map(
                ({ name, iso_3166_1 }) =>
                  name && (
                    <li className="movie__country" key={iso_3166_1}>
                      {name}
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
