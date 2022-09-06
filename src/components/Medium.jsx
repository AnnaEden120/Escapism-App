import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import "./styles/medium.css";
import BookList from "./BooksList";
import MovieList from "./MovieList";
import ShowsList from "./ShowsList";
import GamesList from "./GamesList";

const Medium = () => {
  return (
    <>
      <div className="container">
        <div className="Movies">
          <Link to="/movielist">
            <button>Movies</button>
          </Link>
        </div>

        <div className="Shows">
          <Link to="/showslist">
            <button>Shows</button>
          </Link>
        </div>

        <div className="Books">
          <Link to="/booklist">
            <button>Books</button>
          </Link>
        </div>

        <div className="Games">
          <Link to="/gameslist">
            <button>Games</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Medium;
