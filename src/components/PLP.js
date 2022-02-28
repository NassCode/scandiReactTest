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
        // console.log(res.data.categories[0].products)
        // console.log('response',res.data.categories)

        this.fetchProducts(res.data.categories);
        console.log(this.props.allProducts)

       
      })
      .catch((err) => console.log(err));
  };
  

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <div className="PLPcontainer">
        
        {/* {this.props.allProducts.map((product, i) => (
          <Item key={product.id} productProps={product} />
        ))}  */}

        {/* {this.props.allProducts.map((product, i) => (
          <p key={product.id}>
            {product.name}
          </p>
        ))} */}

      </div>
    ); 
  }
}

PLP.defaultProps = {
  text: 'Meh'
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.categories[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (e) => dispatch({type: "FETCH_PRODUCTS", payload: e})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PLP);