import React from "react";
import "../App.css";
import MediaCard from "./MediaCard";

const picURL = "https://source.unsplash.com/user/erondu/80x80";

function App() {
  return (
    <div className="App">
      <MediaCard
        name="Rocío Garrido"
        date="31 de mayo de 2021"
        img={picURL}
        text="Aquí estoy, aprendiendo React. Espero que me guste casi tanto como JavaScript."
        likes="345"
        heart="💚"
      />
    </div>
  );
}

export default App;
