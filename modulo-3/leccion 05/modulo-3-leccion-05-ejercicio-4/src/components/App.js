import React from 'react';
import '../stylesSheet/App.scss';
import SheepCounter from './SheepCounter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SheepCounter />
      </div>
    );
  }
}

export default App;
