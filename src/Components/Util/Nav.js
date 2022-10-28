import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <nav className="navBar">
        <div id="navLogo">
          <img
            classname="navLogo"
            width="300px"
            alt="Order Form"
            src={process.env.PUBLIC_URL + "/images/navLogo.jpg"}
          ></img>
        </div>
        <ul className="navMenu">
          <li id="navHome">
            <NavLink to="/"> Cheat Sheats </NavLink>
          </li>
          <li id="navScreens">
            <NavLink to="/handbook"> Handbook </NavLink>
          </li>
          <li id="navScreens">
            <NavLink to="/classes"> Classes </NavLink>
          </li>
          <li>
            <NavLink to="/types">Types</NavLink>
          </li>
          <li>
            <NavLink to="/interfaces">Interfaces</NavLink>
          </li>
          <li>
            <NavLink to="/controlFlow">Control Flow Analysis</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
