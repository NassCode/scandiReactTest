import React, { Component } from "react";
import { client } from "../index";
import { CATEGORIES } from "../GraphQL/Queries";


class PLP extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
    this.client = client
    }

  // const { error, loading, data } = useQuery(LOAD_USERS);
  getAllProducts = () => {
    this.client
      .query({
        query: CATEGORIES
      })
      .then((res) => {
        console.log(res);
        this.setState({products: res.data.categories[0].products});
        console.log(`${this.state.products[0].name} + from getAllProducts`);
      })
      .catch((err) => console.log(err));
  };
  

  componentDidMount() {
    this.getAllProducts();
    console.log(`${this.state.products} + from did mount`);
  }

  
  
  

  render() {
    return (
      <div className="App">
        {this.state.products === [] 
        ? null
        : this.state.products.map((product, i) => (
          <div key={i} >{product.name}</div>
        ))}
        <button onClick={() => console.log(this.props)} >prpos</button>
      </div>
    ); 
  }
}

PLP.defaultProps = {
  text: 'Meh'
}

export default PLP;