import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Import i18n.ts
import "./i18n";

import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Router>
    <App />
  </Router>,
);
