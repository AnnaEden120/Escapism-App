import React, { useState } from "react";
import "./styles/medium.css";
import BookList from "./BooksList";
import MovieList from "./MovieList";
import ShowsList from "./ShowsList";
import GamesList from "./GamesList";

const Medium = ({ title }) => {
  const [active, setActive] = useState("FirstRow");
  return (
    <>
      <div className="buttons">
        <button onClick={() => setActive("SecondRow")}>Movies</button>
        <button onClick={() => setActive("ThirdRow")}>Shows</button>
        <button onClick={() => setActive("FirstRow")}>Books</button>
        <button onClick={() => setActive("FourthRow")}>Games</button>
      </div>

      <div className="medium-rows">
        {active === "FirstRow" && <BookList title="books" />}
        {active === "SecondRow" && <MovieList title="movies" />}
        {active === "ThirdRow" && <ShowsList title="shows" />}
        {active === "FourthRow" && <GamesList title="games" />}
      </div>
    </>
  );
};

export default Medium;
