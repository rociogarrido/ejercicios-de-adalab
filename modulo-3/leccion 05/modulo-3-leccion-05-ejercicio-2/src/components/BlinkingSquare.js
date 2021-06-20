import React from 'react';
import '../stylesSheet/App.scss';

class BlinkingSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'blue',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === 'blue') {
        nextStyling = 'red';
      } else if (prevState.styling === 'red') {
        nextStyling = 'green';
      } else if (prevState.styling === 'green') {
        nextStyling = 'soft';
      } else {
        nextStyling = 'blue';
      }

      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    return (
      <div
        className={`App-square App-square-${this.state.styling}`}
        onClick={this.handleClick}
      >
        {this.props.label}
      </div>
    );
  }
}

export default BlinkingSquare;
