import React from 'react';
import '../stylesSheet/App.scss';
import HalfPage from './HalfPage';

function App() {
  return (
    <div className="App">
      <div className="half1">
        <HalfPage title="Estoy en la izquierda">
          <i className="fas fa-heart"></i>
          <p>Soy un párrafo y estoy a la izquierda de la página</p>
        </HalfPage>
      </div>

      <div className="half2">
        <HalfPage title="Estoy en la derecha">
          <p>Y yo soy otro párrafo y estoy a la DERECHA de la página</p>
        </HalfPage>
      </div>
    </div>
  );
}

export default App;
