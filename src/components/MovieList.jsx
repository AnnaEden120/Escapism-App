import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL_MOVIE, API_URL_MOVIES } from "../API";
import axios from "axios";

const BookList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL_MOVIES)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id}>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="#" />
          </div>
          <div>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
