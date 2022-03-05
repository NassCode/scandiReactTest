import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import AllProducts from './components/PLP/allProducts';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <AllProducts />
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
