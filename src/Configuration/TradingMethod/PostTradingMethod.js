import React, { Component } from "react";
import { connect } from "react-redux";
class PostTradingMethod extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const ticker = this.getTicker.value;
    const tradingMethod = this.getTradingMethod.value;
    const data = {
      id: new Date(),
      ticker,
      tradingMethod
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTicker.value = "";
    this.getTradingMethod.value = "";
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTicker = input)}
            placeholder="Enter Ticker"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getTradingMethod = input)}
            cols="28"
            placeholder="Enter Trading Method"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostTradingMethod);
