import React, { Component } from "react";
import { client } from "../index";
import { CATEGORIES } from "../GraphQL/Queries";
import Item from "./Item";

class PLP extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
    this.client = client
    }

  getAllProducts = () => {
    this.client
      .query({
        query: CATEGORIES
      })
      .then((res) => {
        this.setState({products: res.data.categories[0].products});
      })
      .catch((err) => console.log(err));
  };
  

  componentDidMount() {
    this.getAllProducts();
  }

  
  
  

  render() {
    return (
      <div className="PLPcontainer">
        
        {this.state.products.map((product, i) => (
          <Item key={product.id} productProps={product} />
        ))}
      </div>
    ); 
  }
}

PLP.defaultProps = {
  text: 'Meh'
}

export default PLP;