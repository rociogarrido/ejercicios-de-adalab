import React, { useState } from "react";
import "../stylesheets/App.css";

function App() {
  const [age, setAge] = useState(20);
  const [present, setPresents] = useState(1);

  const handleAge = () => {
    setAge(age + 1);
  };

  const handlePresents = () => {
    setPresents(present + 1);
  };

  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad.</p>
      <button type="button" onClick={handleAge}>
        Hazme más vieja
      </button>

      <p>Tengo {present} regalo/s.</p>
      <button type="button" onClick={handlePresents}>
        Dame regalos
      </button>
    </div>
  );
}

export default App;
