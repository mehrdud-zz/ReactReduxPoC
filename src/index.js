import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import postReducer from "./Configuration/Post/postReducer";
import tradingMethodReducer from "./Configuration/TradingMethod/TradingMethodReducer";

const store = createStore(postReducer);

const store2 = createStore(tradingMethodReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(
  <Provider store={store2}>
    <App />
  </Provider>,
  document.getElementById("root")
);
