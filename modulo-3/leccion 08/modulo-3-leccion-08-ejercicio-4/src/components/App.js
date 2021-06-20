import React from "react";
import "../stylesheets/App.css";
import Winners from "./Winners";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Winners />
      </div>
    );
  }
}

export default App;
