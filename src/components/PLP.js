import React, { Component } from "react";
import { client } from "../index";
import { CATEGORIES } from "../GraphQL/Queries";
import Item from "./Item";
import { connect } from "react-redux";

class PLP extends Component {
  constructor(props) {
    super(props);
    this.client = client
    }

  fetchProducts = (e) => {
    this.props.fetchProducts(e)
  }

  getAllProducts = () => {
    this.client
      .query({
        query: CATEGORIES
      })
      .then((res) => {
        console.log(res.data.categories[0].products)
        this.fetchProducts(res.data.categories[0].products);

      })
      .catch((err) => console.log(err));
  };
  

  componentDidMount() {
    this.getAllProducts();
    console.log(this.props.allProducts)
  }

  render() {
    return (
      <div className="PLPcontainer">
        
        {this.props.allProducts.map((product, i) => (
          <Item key={product.id} productProps={product} />
        ))}

      </div>
    ); 
  }
}

PLP.defaultProps = {
  text: 'Meh'
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (e) => dispatch({type: "FETCH_PRODUCTS", payload: e})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PLP);