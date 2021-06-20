import React from 'react';
import '../stylesheets/App.scss';

function Destiny() {
  const onChangeListener = (ev) => {
    const selected = ev.target.value;
    if (selected) {
      alert(`Te vas de viaje a: ${selected}, enhorabuena!`);
    }
  };

  return (
    <form className="App-form">
      <label className="App-label" htmlFor="cities">
        Choose a city to visit:
      </label>
      <select
        className="App-select"
        onChange={onChangeListener}
        name="cities"
        id="cities"
      >
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </form>
  );
}

export default Destiny;

/* const nameInputOne = document.querySelector('#city');
const selectedCity = document.querySelector ('.citys');
const container = document.querySelector('.img1');
console.log(nameInputOne.value); 
function handlechangePhotos() {
    console.log(selectedCity.value); 
    if (selectedCity.value === 'Madrid') {
        let newElement1 = document.createElement('img');
        container.appendChild(newElement1);
        newElement1.src= './Madrid1.jpg';
    }
}
    selectedCity.addEventListener('change', handlechangePhotos) */
