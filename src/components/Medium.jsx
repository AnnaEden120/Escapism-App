import React, { useState } from "react";
import "./styles/medium.css";
import BookList from "./BooksList";
import MovieList from "./MovieList";
import ShowsList from "./ShowsList";
import GamesList from "./GamesList";

function Medium() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => true);
  };

  return (
    <>
      <div className="container">
        <div className="Movies">
          <button onClick={handleClick}>Movies</button>
        </div>
        <div className="Shows">
          <button onClick={handleClick}>Shows</button>
        </div>
        <div className="Books">
          <button onClick={handleClick}>Books</button>
        </div>
        <div className="Games">
          <button Click={handleClick}>Games</button>
        </div>
      </div>
      <div>{isShown && <BookList />}</div>
      <div>{isShown && <MovieList />}</div>
      <div>{isShown && <ShowsList />}</div>
      <div>{isShown && <GamesList />}</div>
    </>
  );
}

export default Medium;
