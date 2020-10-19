import React from "react";
import { hydrate, render } from "react-dom";
import "./scss/default.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const RootElement = document.getElementById("root");

if (RootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    RootElement
  );
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    RootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
