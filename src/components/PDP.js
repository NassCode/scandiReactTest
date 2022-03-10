import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class PDP extends Component {
  params = this.props.match.params;

  render() {
    console.log(this.params)
    return (
      <div className="App">
        <h1>{this.params.id}</h1>
      </div>
    );
  }
}

export default withRouter(PDP);