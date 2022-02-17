import React, { Component } from "react";

class PLP extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }
  

  componentDidMount() {
    const productsQuery = `{
      categories{
        name
        products {
        name
        inStock
      }}
      
    }`;

    const res = async () => {
      try {
        const response = await fetch(`http://localhost:4000`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const body = await response.json();
  
        this.setState({ products: body.data.Product });
      } catch (err) {
        console.log(`${err} + error`);
      }
      
    }
    res();
  }
  //   fetch("http://localhost:4000", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //   },
  //     body: JSON.stringify({
  //       query: productsQuery
  //     }).then()
  // }

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
      </div>
    );
  }
}

export default PLP;