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
        "X-RapidAPI-Key": "e4ec0fbd24msh9d07b92d5168003p12b8d8jsn8b323e3d15ad",
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
        {movies.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <img
                src={
                  item.image
                    ? item.image.url
                    : "https://m.media-amazon.com/images/M/MV5BZGVlNjMzZDItYmVkNy00ODVkLWExOTItNGQ4MDY1NDAxNzE0XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_.jpg"
                }
                alt="#"
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
