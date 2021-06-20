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
    const filterStudent = students.filter((student) => {
      return student.promo === "A";
    });

    const paintResult = filterStudent.map((student, index) => (
      <li key={index}>
        <h2>Nombre: {student.name}</h2>
        <p>Edad: {student.age}</p>
      </li>
    ));
    return (
      <div>
        <ul>{paintResult}</ul>
      </div>
    );
  }
}

export default App;
