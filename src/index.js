import React from "react"
import * as ReactDOMClient from "react-dom/client"
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {reducer} from "./store/reducers/reducer"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css"
import App from "./App"



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.querySelector("#root");

const container = ReactDOMClient.createRoot(rootElement)

container.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
)