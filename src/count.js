import React from "react";
import { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  
  return { count: state.counter[0].count };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}

class App extends Component {
  increment = () => {
    this.props.increment();
  }
  decrement = () => {
    this.props.decrement();
  }
  
  
  render() {
    return (
      <div className="PLPitem">
        <button onClick={this.increment}>
          +
        </button>
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}>
          -
        </button>
    </div>
    )
  }
    
  
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
