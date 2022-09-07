import React from "react";
import Medium from "./components/Medium";
import "./App.css";

function MyList() {
  return (
    <div className="medium">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <h1>My List</h1>
      <Medium />
    </div>
  );
}

export default MyList;
