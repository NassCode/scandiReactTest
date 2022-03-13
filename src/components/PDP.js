import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";



class PDP extends Component {
  params = this.props.match.params;
  productProps = this.props.allProducts.products.find(product => product.id === this.params.id);

  render() {
    console.log(this.params)
    console.log(this.props.allProducts.products)
    console.log(this.props.allProducts.products.find(product => product.id === this.params.id))
    return (
      <div className="App">
        <h1>{this.params.id}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.categories[0]
  }
}

export default connect(mapStateToProps)(withRouter(PDP));