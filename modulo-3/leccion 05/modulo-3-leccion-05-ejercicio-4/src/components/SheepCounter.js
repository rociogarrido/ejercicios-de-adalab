import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = { counter: 0 };
  }

  handleButton() {
    this.setState(function (prevState) {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div className="App-boxCounter">
        <button className="App-counterBtn" onClick={this.handleButton}>
          Sheep Counter
        </button>
        <h1>Mi número de ovejas es:</h1>
        <p className="App-sheepResult">{this.state.counter}</p>
      </div>
    );
  }
}

export default SheepCounter;
