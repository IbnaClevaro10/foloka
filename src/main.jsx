import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Gausah StrictMode dulu biar ga double render pas dev
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
