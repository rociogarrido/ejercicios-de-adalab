import React from "react";
import "../stylesheets/index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }
  componentWillUnmount() {
    console.log("ComponentWillMount method is being executed");
    // limpiamos el interval
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    console.log("IncrementCounter method is being executed");
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    console.log("Render method is being executed");
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;
