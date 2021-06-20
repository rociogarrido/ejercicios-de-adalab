import React from 'react';
import '../stylesSheet/App.scss';

class BipolarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Nuestra función escuchadora del evento click
    this.setState({
      styling: 'danger',
    });
  }

  render() {
    return (
      <button
        className={`btn btn-${this.state.styling}`}
        onClick={this.handleClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default BipolarButton;
