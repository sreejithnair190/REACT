import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import { CartProvider } from "./context/cart";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
