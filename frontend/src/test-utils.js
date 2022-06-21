import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";

function render(
  ui,

  {
    preloadedState,
    store = configureStore({
      reducer: {
        user: userReducer,
        cart: cartReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

function renderforCart(
  ui,

  {
    preloadedState,
    store = configureStore({
      reducer: {
        user: userReducer,
        cart: cartReducer,
      },
      preloadedState: {
        user: {
          currentUser: "River",
        },
      },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render, renderforCart };
