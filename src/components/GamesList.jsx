import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const GamesList = () => {
  const [games] = useState([]);

  const options = {
    method: "GET",
    url: "https://steam2.p.rapidapi.com/search/Counter/page/1",
    headers: {
      "X-RapidAPI-Key": "5819e5e223msh21b0556c8e8b527p160eefjsnac6c5e43e946",
      "X-RapidAPI-Host": "steam2.p.rapidapi.com"
    }
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="game-list">
      {games.map((object) => (
        <div key={object.appId}>
          <div>
            <h2>{object.title}</h2>
          </div>
          <div>
            <img src={object.imgUrl} alt="#" />
          </div>
          <div>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
