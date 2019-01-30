import React, { Component } from 'react';
// ap css m obrigatorio
// import './App.css';
import Header from './components/Header/index.js';
import Navbar from './components/Navbar/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        < Navbar/>
      </div>
    );
  }
}

export default App;