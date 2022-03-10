import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PLP from './components/PLP';
import CartPage from './components/CartPage';
import CartOverlay from './components/CartOverlay';
import Navbar from './components/navbar';
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
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/'>
                <PLP type='all' />
              </Route>
              <Route path='/clothes'>
                <PLP type='clothes' />
              </Route>
              <Route path='/tech'>
                <PLP type='tech' />
              </Route>
              <Route path='/cart'>
                <CartPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
