import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../routes";
import style from "./styles/Header.module.css";

const Header = () => {
  // const style = {
  //     paddingLeft:
  // }
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue lighten-1">
          <ul
            id="nav-mobile"
            className="left hide-on-med-and-down"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <li>
              <NavLink to={routes.HOME} exact activeClassName={style.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.SHOWS} activeClassName={style.active}>
                Shows
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.ABOUT} activeClassName={style.active}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
