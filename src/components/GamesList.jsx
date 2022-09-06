import React, { useState, useEffect } from "react";
import "./styles/lists.css";

const GamesList = (props) => {
  const [games, setGames] = useState([]);

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

    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${props.search}`, options)
      .then((response) => response.json())
      .then((data) => {
        const games = data.results;
        console.log(games);

        setGames(games);
      })

      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="games-list">
        {games.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.l}</h4>
              <img src={item.image.url} alt="#"></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GamesList;
