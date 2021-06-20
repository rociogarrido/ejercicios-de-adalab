import React from "react";
import "../stylesheets/App.css";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

const [user1, user2, user3, user4, user5] = users;
console.log("Hola, " + user1.name);
console.log("Hola, " + user4.name + ". " + "Son las " + user2.time);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">Hola, Maribel</div>;
  }
}

export default App;
