import React, { Component } from 'react';
import logo from './spark.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SparkFlow</h1>
        </header>
        <p className="App-intro">
          Hey yo.
        </p>
      </div>
    );
  }
}

export default App;
