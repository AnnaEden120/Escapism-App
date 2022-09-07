import React, { useState, useEffect } from "react";
import "./styles/lists.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5819e5e223msh21b0556c8e8b527p160eefjsnac6c5e43e946",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
      }
    };

    fetch(
      `https://imdb8.p.rapidapi.com/title/find?q=movie%20the%20one`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        console.log(movies);

        setMovies(movies);
      })

      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="movie-list">
        {movies.map((item) => {
          return (
            <div key={i}>
              <h4>{item.title}</h4>
              <img src={item.image.url} alt="#"></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
