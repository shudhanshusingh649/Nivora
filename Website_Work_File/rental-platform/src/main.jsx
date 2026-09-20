import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";

import "./styles/global.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/components.css";
import "./styles/responsive.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);