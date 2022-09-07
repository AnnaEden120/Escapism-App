import React, { useState, useEffect } from "react";
import "./styles/lists.css";

const GamesList = () => {
  const [games, setGames] = useState([]);

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
      `https://imdb8.p.rapidapi.com/title/find?q=videoGame%20the%20`,
      options
    )
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
        {games.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={
                  item.image
                    ? item.image.url
                    : "https://render.fineartamerica.com/images/rendered/search/poster/8/6.5/break/images/artworkimages/medium/1/tekken-5-eloisa-mannion.jpg"
                }
                alt="#"
              ></img>
              <div className="title">
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GamesList;
