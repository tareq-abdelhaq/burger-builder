import React from "react"
// import * as ReactDOMClient from "react-dom/client"
import ReactDOM from "react-dom";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk"
import {ingredients} from "./store/reducers/ingredients"
import {auth} from "./store/reducers/auth"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./index.css"
import App from "./App"

const rootReducer = combineReducers({
    ings: ingredients,
    auth: auth
})

const composeEnhancers = (process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.querySelector("#root");

// const container = ReactDOMClient.createRoot(rootElement)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
    rootElement
)