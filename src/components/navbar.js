import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'all'
    };
  }

  render() {
    return (
      <div>
        <span onClick={() => console.log(this.props)} >All</span>
        <span>Clothes</span>
        <span>Tech</span>
      </div>
    )
  }
}

Navbar.defaultProps = {
  text: 'Navbar'
}

export default Navbar;