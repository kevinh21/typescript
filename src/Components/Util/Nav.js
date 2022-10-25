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
            alt="Order Form"
            src={process.env.PUBLIC_URL + "/images/navLogo.jpg"}
          ></img>
        </div>
        <ul className="navMenu">
          <li id="navHome">
            <NavLink to="/home"> Home </NavLink>
          </li>
          <li id="navScreens">
            <NavLink to="/custForm"> Customer </NavLink>
          </li>
          <li>
            <NavLink to="/vehicleForm">Vehicle</NavLink>
          </li>
          <li>
            <NavLink to="/jobForm">Job</NavLink>
          </li>
          <li>
            <NavLink to="/orderForm">Order</NavLink>
          </li>
          <li>
            <NavLink to="/payForm">Payment</NavLink>
          </li>
          <li>
            <ul id="navOrderList">
              <li>
                <NavLink to="/custList">Customers</NavLink>
              </li>
              <li>
                <NavLink to="/jobList">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/orderList">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/payList">Payments</NavLink>
              </li>
              <li>
                <NavLink to="/vehicleList">Vehicles</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
