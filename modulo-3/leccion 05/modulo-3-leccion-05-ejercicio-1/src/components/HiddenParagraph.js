import React from 'react';
import '../stylesSheet/App.scss';

class HiddenParagraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'App-hidden',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // Nuestra función escuchadora del evento click
    this.setState({
      styling: 'App-show',
    });
  }

  render() {
    return (
      <form className="App-form">
        <label className="App-label" htmlFor="App-surprise">
          Escribe tu nombre
        </label>
        <input
          id="App-surprise"
          className="App-surprise"
          onChange={this.handleChange}
        />
        <p className={`App-text ${this.state.styling}`}>Sorpresa!!!!</p>
      </form>
    );
  }
}

export default HiddenParagraph;
