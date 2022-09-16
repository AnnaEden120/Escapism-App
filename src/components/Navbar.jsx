import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo">Escapism App</div>
      <nav className="item">
        <ul className="ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My List</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
