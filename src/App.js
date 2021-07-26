import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = incOrDec => {
    if(incOrDec === 'Increase'){
      setCount(prevCount => prevCount + 1)
    } else setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter handleClick={handleClick} count={count}/>
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
    </div>
  );
}

export default App;
