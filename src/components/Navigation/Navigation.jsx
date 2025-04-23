import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { PiFilmSlate } from "react-icons/pi";

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logo}>
          <PiFilmSlate /> MovieSearcher
        </div>
        <ul className={s.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${s.link} ${isActive ? s.active : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${s.link} ${isActive ? s.active : ""}`
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
