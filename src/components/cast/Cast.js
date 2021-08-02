import React, { Component } from "react";
import { searchCast } from "../../services/ApiService";
import ScrollUpButton from "../ScrollUpBtn/ScrollUpBtn";

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await searchCast(movieId).then(
      (response) => response.data
    );
    this.setState({ cast: response.cast });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <section className="section">
        <ul className="cast__list">
          {cast?.length > 0 ? (
            cast.map(({ profile_path, id, name, character }) => (
              <>
                {profile_path && (
                  <li className="actor__card" key={id}>
                    <div className="actor__cardWrapper">
                      <div>
                        <img
                          className="actor__photo"
                          src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                          alt={name}
                        />
                      </div>

                      <div className="actor__info">
                        <p className="actor__name"> {name}</p>
                        <p className="actor__character">
                          For: <b>{character}</b>
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </>
            ))
          ) : (
            <p className="notification">No cast provided</p>
          )}
        </ul>
        )
        <ScrollUpButton />
      </section>
    );
  }
}

export default Cast;
