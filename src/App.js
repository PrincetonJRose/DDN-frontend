import React from 'react';
import logo from './logo.svg';
import './App.css';
import { dndAPICall } from './Services/api_calls'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const App = props => {
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
        <br/>
        <input type='text' name='query' onKeyDown={ (e)=> {
            if (e.key === 'Enter') {
              console.log(e.target.value)
              props.dispatch({ type: 'FETCH_DATA', data: dndAPICall(e.target.value) })
            }
          }}
        />
        <br/>
        <div style={{ overflowY: 'auto' }}>
          <p>
            { console.log(props.data) }
          </p>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.api.data
  }
}

export default withRouter(connect(mapStateToProps)(App));
