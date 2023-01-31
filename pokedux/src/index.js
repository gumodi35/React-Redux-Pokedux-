import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { applyMiddleware,
    compose,
    legacy_createStore as createStore } from "redux";
import { featuring, logger } from './middlewares';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers = compose( window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring))

const store = createStore(pokemonsReducer, composeEnhancers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
