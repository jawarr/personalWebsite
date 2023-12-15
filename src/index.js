import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Main, NavigationBar } from "./components"

ReactDom.render(
    <Router>
        <NavigationBar />
        <Main />
    </Router>,
    document.getElementById("app")
)