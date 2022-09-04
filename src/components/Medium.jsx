import React, { useState } from "react";
import "./styles/medium.css";
import BookList from "./BooksList";

function Medium() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => true);
  };

  return (
    <div className="container">
      <div className="Movies">
        <button>Movies</button>
      </div>
      <div className="Shows">
        <button>Shows</button>
      </div>
      <div className="Books">
        <button onClick={handleClick}>Books</button>
        {isShown && <BookList />}
      </div>
      <div className="Games">
        <button>Games</button>
      </div>
    </div>
  );
}

export default Medium;
