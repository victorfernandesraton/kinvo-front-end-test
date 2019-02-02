import React, { Component } from 'react';
// ap css m obrigatorio
// import './App.css';
// meus componentes
import Header from './components/Header/index.js';
import Banner from "./components/Banner/index.js";
import Sobre from "./components/Sobre/index.js";
import Recursos from "./components/Recursos/index.js";
import Kinvoweb from "./components/Kinvoweb/index.js";
import Planos from "./components/Planos/index.js";
import QuemFaz from "./components/QuemFaz/index.js";
import Footer from "./components/Footer/index.js";
import "./index.js";
class App extends Component {
  render() {
    return (
      <div className="App">
      < Header/>
      < Banner/>
      < Sobre/>
      < Recursos/>
      < Kinvoweb/>
      < Planos/>
      < QuemFaz/>
      < Footer/>
      </div>
    );
  }
}

export default App;