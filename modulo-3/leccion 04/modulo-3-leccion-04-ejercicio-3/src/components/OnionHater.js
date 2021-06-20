import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.classSelected = '';
  }

  onChangeHandle(ev) {
    this.forceUpdate();
    const textArea = ev.target.value.toLowerCase();
    if (textArea.includes('cebolla')) {
      this.classSelected = 'love';
    } else {
      this.classSelected = '';
    }
  }

  render() {
    return (
      <div className={`${this.classSelected} container`}>
        <h1>Recetas que llevan cebolla.</h1>
        <textarea
          className="textArea"
          id="recipy"
          onChange={this.onChangeHandle}
          placeholder="Escribe una receta de sofrito tradicional"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  }
}
export default OnionHater;
