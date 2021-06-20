import React from 'react';
import logo from '../images/logo.svg';
function CityImage(props) {
  const destinyPhoto = {
    Praga: `${logo}`,
    Boston:
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/TE-Collage_Boston.png',
    Sydney:
      'https://astelus.com/wp-content/viajes/Guia-turistica-de-Sidney.jpg',

    'Buenos Aires':
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Montaje_de_la_Ciudad_de_Buenos_Aires.png',
    Tokyo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Tokyocity.png',
  };

  return (
    <>
      <h2>You wil love {props.city}</h2>
      <img
        src={destinyPhoto[props.city /* .replace(" ","") */]}
        className="App-image"
        alt={props.city}
      />
    </>
  );
}

export default CityImage;
