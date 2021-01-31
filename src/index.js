import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./assets/js/setRem";
import "./assets/css/index.scss";
import initReactFastclick from "react-fastclick";
import Logger from "redux-logger";
import reducersOptions from "./reducers";
initReactFastclick();
const reducers = combineReducers(reducersOptions);
const store = createStore(reducers, {}, applyMiddleware(Logger));
const renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
};
renderPage();
store.subscribe(renderPage);
serviceWorker.unregister();
