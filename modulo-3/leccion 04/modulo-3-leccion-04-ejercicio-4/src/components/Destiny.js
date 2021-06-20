import React from 'react';
import '../stylesSheet/App.scss';
import CityImage from './CityImage';

/* let cityPhoto = ''; */
let cityPhoto = '';
class Destiny extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeListener = this.onChangeListener.bind(this);
  }

  onChangeListener(ev) {
    this.forceUpdate();
    cityPhoto = ev.target.value;
  }

  render() {
    return (
      <form className="App-form">
        <label className="App-label" htmlFor="cities">
          Choose a city to visit:
        </label>
        <select
          className="App-select"
          onChange={this.onChangeListener}
          name="cities"
          id="cities"
        >
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <CityImage city={cityPhoto} />
      </form>
    );
  }
}

export default Destiny;
