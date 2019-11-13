import React from 'react';
//import background from './images/background.PNG';
import './App.css';
import Background from './components/Background.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="imgbox">
          {/* <img src={background} className="center-fit" alt="logo" /> */}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Background />
    </div>
  );
}

export default App;

