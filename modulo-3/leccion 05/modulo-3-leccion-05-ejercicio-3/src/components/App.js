import React from 'react';
import '../stylesSheet/App.scss';
import Clock from './Clock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
