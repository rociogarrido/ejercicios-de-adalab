import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const studentsList = students.map((student, index) => (
      <li key={index}>
        <h2>Nombre: {student.name}</h2>
        <p>Edad: {student.age}</p>
      </li>
    ));
    return (
      <div>
        <ul>{studentsList}</ul>
      </div>
    );
  }
}

export default App;
