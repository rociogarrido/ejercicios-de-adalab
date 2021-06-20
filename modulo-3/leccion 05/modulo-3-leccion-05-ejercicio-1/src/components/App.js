import React from 'react';
import '../stylesSheet/App.scss';
import HiddenParagraph from './HiddenParagraph';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HiddenParagraph />
      </div>
    );
  }
}

export default App;
