import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PLP from './components/PLP';
import PDP from './components/PDP';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';
import Navbar from './components/navbar';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';


const store = createStore(() => [], {}, applyMiddleware());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <PLP />
        
        </div>
      </Provider>
    );
  }
}


export default App;
