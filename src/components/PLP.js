import React, { Component } from "react";
import { client } from "../index";
import { CATEGORIES } from "../GraphQL/Queries";
import Item from "./Item";
import { connect } from "react-redux";

class PLP extends Component {


  client = client;


  fetchProducts = (e) => {
    this.props.fetchProducts(e)
  }

  getAllProducts = () => {
    this.client
      .query({
        query: CATEGORIES
      })
      .then((res) => {
        this.fetchProducts(res.data.categories);
      })
      .catch((err) => console.log(err));
  };


  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <div className="PLPcontainer">

        {this.props.allProducts.products.map((product, i) => (
          <Item key={product.id} productProps={product} />
        ))}

      </div>
    );
  }
}

PLP.defaultProps = {
  allProducts: {
    products: [{
      id: 1,
      name: "placeholder",
      prices: [
        {
          amount: 1,
          currency: {
            label: "USD",
            symbol: "$"
          }
        },
        {
          amount: 1,
          currency: {
            label: "GBP",
            symbol: "£"
          }
        },
        {
          amount: 1,
          currency: {
            label: "AUD",
            symbol: "A$"
          }
        },
        {
          amount: 1,
          currency: {
            label: "JPY",
            symbol: "¥"
          }
        },
        {
          amount: 1,
          currency: {
            label: "RUB",
            symbol: "₽"
          }
        }
      ],
      inStock: true,
      gallery: [
        ""
      ],
      attributes: [
        {
          name: "Size",
          items: [
            {
              displayValue: "1",
              value: "1"
            },
            {
              displayValue: "1",
              value: "1"
            },
            {
              displayValue: "1",
              value: "1"
            },
            {
              displayValue: "1",
              value: "1"
            }]
        }]
    }]
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.categories[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (e) => dispatch({ type: "FETCH_PRODUCTS", payload: e })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PLP);