import React, { Component } from "react";
import { client } from "../../index";
import { CATEGORIES } from "../../GraphQL/Queries";
import Item from "../Item";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Navbar from "../navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Tech from "./tech";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "all"
    };
    this.handleTabClick = this.handleTabClick.bind(this);

  }

  handleTabClick = (e) => {
    this.setState({ tab: e });
    console.log(this.state.tab);
  };


  client = client;
  path = this.props.match.path;
  url = this.props.match.url;


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
    console.log(this.props)
    return (
      <div>
        <Navbar handleTabClick={this.handleTabClick} />

        <div className="PLPcontainer">
          {this.state.tab === "all" &&

            this.props.allProducts.products.map((product, i) => (
              <Item key={product.id} productProps={product} />
            ))
          }

          {this.state.tab === "clothes" &&

            this.props.colthes.products.map((product, i) => (
              <Item key={product.id} productProps={product} />
            ))

          }

          {this.state.tab === "tech" &&

            this.props.tech.products.map((product, i) => (
              <Item key={product.id} productProps={product} />
            ))

          }

        </div>
      </div>
    );
  }
}

AllProducts.defaultProps = {
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
    allProducts: state.categories[0],
    colthes: state.categories[1],
    tech: state.categories[2]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (e) => dispatch({ type: "FETCH_PRODUCTS", payload: e })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllProducts));