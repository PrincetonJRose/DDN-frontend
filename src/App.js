import React from 'react';
import logo from './logo.svg';
import './App.css';
import { dndAPICall } from './Services/api_calls'
let data

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <input type='text' name='query' onKeyDown={ (e)=> {
            if (e.key === 'Enter') {
              console.log(e.target.value)
              data = dndAPICall(e.target.value)
              console.log(data)
            }
          }}
        />
      </header>
    </div>
  );
}

export default App;
