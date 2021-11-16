import React, { useState } from 'react';
import "./style.scss";
import Registration from "../registration";

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
   <div className = "homeContainer">
      <div className = "header">Siriusxm Header</div>
      <div className = "contentContainer">
        <Registration/>
      </div>
    </div>
  );
}

export default Home;