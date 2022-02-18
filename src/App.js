import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PLP from './components/PLP';
import PDP from './components/PDP';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';


class App extends Component {
  render() {
    return (
        <div className="App">

          <PLP/>
        
        </div>
    );
  }
}


export default App;
