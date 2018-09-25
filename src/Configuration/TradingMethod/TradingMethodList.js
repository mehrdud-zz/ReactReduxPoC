import React, { Component } from "react";

import { connect } from "react-redux";

import TradingMethod from "./TradingMethod";

class TradingMethodList extends Component {
  render() {
    return (
      <div>
        <h1>All Trading Methods</h1>
        {this.props.tradingMethods.map(tradingMethod => (
          <TradingMethod
            key={TradingMethod.Ticker}
            tradingMethod={TradingMethod}
          />
        ))}

        <div>
          <input type="button" value="Create new trading method" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tradingMethods: state
  };
};
export default connect(mapStateToProps)(TradingMethodList);
