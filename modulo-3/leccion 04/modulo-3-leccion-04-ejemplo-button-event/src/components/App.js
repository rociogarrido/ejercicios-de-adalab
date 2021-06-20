import React from 'react';
import '../stylesSheet/App.scss';

function App() {
  /*  EVENTO 1 */
  const onClickListener = (ev) => {
    alert('Para más información, acuda a recepción.');
  };

  /*  EVENTO 2 */
  const onClickAlert = (event) => {
    alert(
      'Para más información, acuda a recepción.\nMe ha salido un pareado sin haberlo planeado.'
    );
  };
  /* VARIABLE EVENTO 2 */
  const alertButton = (
    <button className="button2" onClick={onClickAlert}>
      Más información
    </button>
  );

  return (
    <div className="App">
      {/*  EVENTO 1 PINTANDO DIRECTAMENT JSX */}
      <button className="button1" onClick={onClickListener}>
        Pedir más información
      </button>
      {/*  EVENTO 2 PINTANDO CONSTANTE */}
      {alertButton}
    </div>
  );
}

export default App;
