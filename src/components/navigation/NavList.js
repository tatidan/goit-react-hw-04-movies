import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../../icons/sprite.svg";

const NavList = () => {
  return (
    <ul className="NavList">
      <li className="NavListItem">
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          <svg className="NavLink__icon">
            <use href={sprite + "#icon-home"}></use>
          </svg>
          Home
        </NavLink>
      </li>
      <li className="NavListItem">
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          <svg className="NavLink__icon">
            <use href={sprite + "#icon-video-camera"}></use>
          </svg>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
