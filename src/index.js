import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Main, Navbar } from "./components"

ReactDom.render(
    <Router>
        <Navbar />
        <Main />
    </Router>,
    document.getElementById("app")
)