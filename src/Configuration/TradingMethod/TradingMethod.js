import React, { Component } from "react";

class TradingMethod extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.Ticker}</h2>
        <p>{this.props.Method}</p>
      </div>
    );
  }
}
export default TradingMethod;
