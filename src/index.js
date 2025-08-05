import React from "react";
import ReactDOM from "react-dom/client";  // HUOM: /client loppu
import App from "./App";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));  // createRoot

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
