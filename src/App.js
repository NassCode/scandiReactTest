import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PLP from './components/PLP';
import PDP from './components/PDP';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';




class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <PLP />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
