import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { StateProvider } from "./apps/StateProvider";
import reducer, { initialState } from "./apps/reducer";
const container = document.querySelector("#root");

const root = createRoot(container);

root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <Router>
      <App />
    </Router>
  </StateProvider>
);
