import React from "react";
import { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  
  return { counter: state.counter };
}

export class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className="PLPitem">
        <h1>{this.props.counter.count}</h1>
    </div>
    )
  }
    
  
}


export default connect(mapStateToProps)(App)
