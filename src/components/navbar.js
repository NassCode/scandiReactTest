import { Component } from "react";
import CartOverlay from "./CartOverlay";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



class Navbar extends Component {



  render() {
    console.log(this.props)

    return (
      <div className="navbar container">
        <div className="categoriesContainer">

          <span onClick={() => this.props.handleTabClick('all')}>All</span>

          <span onClick={() => this.props.handleTabClick('clothes')}>Clothes</span>

          <span onClick={() => this.props.handleTabClick('tech')}>Tech</span>

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