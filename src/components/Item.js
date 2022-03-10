import React, { Component } from "react";
import cartOutline from "./icons/cart-outline.svg";
import { withRouter } from 'react-router-dom'



class Item extends Component {

  history = this.props.history;


  render() {
    return (
      <div onClick={() => this.history.push(`/item/${this.props.productProps.id}`)} className="PLPitem">
        <div className="PLPimageContainer">
          <img className="PLPimage" src={this.props.productProps.gallery[0]} alt={cartOutline} />
        </div>
        <div className="PLPitemInfo">
          <span>{this.props.productProps.name}</span>
          <span>{this.props.productProps.prices[0].amount} {this.props.productProps.prices[0].currency.symbol}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Item);