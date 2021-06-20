import React from "react";
import "../stylesheets/App.css";
import Movie from "./Movie";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
