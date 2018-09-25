import React, { Component } from "react";
import { Logger, ConsoleLogger } from "react-console-logger";
import TradingMethodList from "../Configuration/TradingMethod/TradingMethodList";
import PostTradingMethod from "../Configuration/TradingMethod/PostTradingMethod";
const myLogger = new Logger();

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.showStrategy = this.showStrategy.bind(this);
    this.showThreads = this.showThreads.bind(this);
    this.showDashboard = this.showDashboard.bind(this);
    this.state = {
      dashboard: "Dashboard"
    };
  }
  render() {
    const dashboard = this.state.dashboard;
    let button;

    if (dashboard === "Dashboard") {
      button = (
        <div>
          <h1>Dashboard</h1>
          <input
            type="button"
            value="Show strategies"
            onClick={this.showStrategy}
          />

          <TradingMethodList />
        </div>
      );
    } else {
      button = (
        <div>
          <h1>Trading Methods</h1>
          <input
            type="button"
            value="Show Dashboard"
            onClick={this.showDashboard}
          />
          <PostTradingMethod />
        </div>
      );
    }

    return (
      <div>
        {button}
        {this.state.dashboard}
        {dashboard}
      </div>
    );
  }

  showDashboard() {
    this.setState({ dashboard: "Dashboard" });
    console.log("Set dashboard to Dashboard");
  }

  showStrategy() {
    this.setState({ dashboard: "Strategy" });
    console.log("Set dashboard to Strategy");
  }

  showThreads() {
    this.setState = { dashboard: "Threads" };
    console.log("Set dashboard to Threads");
  }
}

export default LandingPage;
