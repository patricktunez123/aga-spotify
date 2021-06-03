import React from "react";
import ReactDOM from "react-dom";
import "./_index.scss";
import App from "./App";
import { DataLayer } from "./data/DataLayer";
import { initialState, reducer } from "./data/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
