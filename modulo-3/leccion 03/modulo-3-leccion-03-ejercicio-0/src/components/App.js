import React from "react";

class App extends React.Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];

    return (
      <div>
        <h1>Pintar listado en React: el problema de las keys</h1>
        <p>
          Si ejecutas este código, verás un warning en consola. ¿Sabrías
          solucionar este warning siguiendo el enlace que te sugiere React?
        </p>
        {/* con este map iteramos iteramos el array de items */}
        {items.map((item, index) => {
          // cada return retorna un li
          return (
            <li key={index}>
              <h2>Nombre: {item.name}</h2>
              <p>Descripción: {item.description}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Categoría: {item.category}</p>
              <p>Precio: {item.price}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
