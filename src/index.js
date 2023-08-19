import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxstore from "./component/Product/redux/reduxstore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxstore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
