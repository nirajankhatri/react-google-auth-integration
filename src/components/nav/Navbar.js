import React from "react";
import logo from "../../assets/images/menu.svg";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="company">Company</NavLink>
          </li>
          <li>
            <NavLink to="aboutus">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right btns">
        <button className="btn btn-login"><NavLink to="login">Login</NavLink></button>
      </div>
    </div>
  );
}

export default Navbar;
