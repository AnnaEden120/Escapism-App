import React from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo">Escapism App</div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
