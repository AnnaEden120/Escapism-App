import React from "react";
import Form from "./components/Form";
import { useState } from "react";

function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => true);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Sign up</button>
      {isShown && <Form />}
    </div>
  );
}

export default Home;
