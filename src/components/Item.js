import React, { Component } from "react";
import cartOutline from "./icons/cart-outline.svg";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemProps: []
    }
  }

  componentDidMount() {
    this.setState({itemProps: this.props.productProps});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productProps !== this.props.productProps) {
      this.setState({itemProps: this.props.productProps});
    }
  }


  render() {
    return (
      <div className="PLPitem">
        
        <img className="PLPimage" src={this.props.productProps.gallery[0]} alt={cartOutline}/>
        <h3>{this.props.productProps.name}</h3>
        <p>{this.props.productProps.prices[0].amount} {this.props.productProps.prices[0].currency.symbol}</p>
      </div>
    );
  }
}

export default Item;