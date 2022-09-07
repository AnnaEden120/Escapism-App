import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import "./App.css";

function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => true);
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <button id="sign-up" onClick={handleClick}>
        Sign up
      </button>
      <div className="form-home">{isShown && <Form />}</div>
    </div>
  );
}

export default Home;
