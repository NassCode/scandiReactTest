import { Component } from "react";
import CartOverlay from "./CartOverlay";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



class Navbar extends Component {
  path = this.props.match.path;
  url = this.props.match.url;



  render() {

    return (
      <div className="navbar container">
        <div className="categoriesContainer">

          <NavLink to='/'>All</NavLink>


          <NavLink to='/clothes'>Clothes</NavLink>

          <NavLink to='/tech'>Tech</NavLink>

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

export default withRouter(Navbar);