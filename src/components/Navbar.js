import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo">Escapism App</div>
      <nav className="item">
        <ul className="ul">
          <li>Home</li>
          <li>My List</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
