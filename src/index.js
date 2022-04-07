import React from "react"
import * as ReactDOMClient from "react-dom/client"
import {BrowserRouter} from "react-router-dom";
import "./index.css"
import App from "./App"

const rootElement = document.querySelector("#root");

const container = ReactDOMClient.createRoot(rootElement)

container.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
)