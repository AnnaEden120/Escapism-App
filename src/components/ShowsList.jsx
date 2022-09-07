import React, { useState, useEffect } from "react";
import "./styles/lists.css";

const ShowsList = () => {
  const [shows, setShows] = useState([]);

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
      `https://imdb8.p.rapidapi.com/title/find?q=tvSeries%20the%20in`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const shows = data.results;
        console.log(shows);

        setShows(shows);
      })

      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="shows-list">
        {shows.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image && item.image.url} alt="#"></img>
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

export default ShowsList;
