import React from "react";
import Form from "./components/Form";
import { useState } from "react";

function Home() {
  const [link, updateLink] = useState(null);
  const [copied, setCopied] = useState(false);
  const generateLink = (data) => {
    const newLink = `postgres://${data.username}:${data.password}@${
      data.host
    }:${data.port}${data.db ? "/final-app" + data.db : "user_sign"}`;
    return updateLink(newLink);
  };

  const handleClick=()=>{
    if (onClick=1){
      getFunc
    }
    )
  }

  return (
    <div>
      <h1>Home</h1>
  <button onClick={handleClick(<Form/>)}>Sign up</button>
    </div>
  );
}

export default Home;
