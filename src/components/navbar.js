import { Component } from "react";
import CartOverlay from "./CartOverlay";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'all'
    };
  }

  render() {
    return (
      <div className="navbar container">
        <div className="categoriesContainer">
          <span onClick={() => console.log(this.props)} >All</span>
          <span>Clothes</span>
          <span>Tech</span>
        </div>
       
        <span>\__LOGO__/</span>
        
        <div className="cartContainer">
          <span>$</span>
          <CartOverlay />
        </div>
        
      </div>
    )
  }
}

Navbar.defaultProps = {
  text: 'Navbar'
}

export default Navbar;