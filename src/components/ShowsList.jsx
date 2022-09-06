import React from "react";
import "./styles/lists.css";

const ShowsList = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5819e5e223msh21b0556c8e8b527p160eefjsnac6c5e43e946",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
    }
  };

  fetch(
    "https://imdb8.p.rapidapi.com/auto-complete?q=TV%20series%20%20%20way",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const shows = data.d;

      shows.map((item) => {
        const poster = item.i.imageUrl;
        const show = `<img src="${poster}"></img>`;
        document.querySelector(".show-list").innerHTML += show;
      });
    })
    .catch((err) => console.error(err));

  return (
    <>
      <div className="show-list"></div>
    </>
  );
};

export default ShowsList;
