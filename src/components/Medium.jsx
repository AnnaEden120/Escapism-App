import React, { useState } from "react";
import "./styles/medium.css";
import BookList from "./BooksList";
import MovieList from "./MovieList";

function Medium() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => true);
  };

  return (
    <>
      <div className="container">
        <div className="Movies">
          <button>Movies</button>
        </div>
        <div className="Shows">
          <button>Shows</button>
        </div>
        <div className="Books">
          <button onClick={handleClick}>Books</button>
        </div>
        <div className="Games">
          <button>Games</button>
        </div>
      </div>
      <div className="book-row">{isShown && <BookList />}</div>
    </>
  );
}

export default Medium;
