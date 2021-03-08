import React, { Component } from 'react'
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"
import AllComponents from "./Components/AllComponent";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css"
import  "bootstrap/dist/css/bootstrap.min.css" ;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav/>
        <Route path = "/" exact component = {AllComponents} />
        <Route path = "/Contact"  component = {Contact} />
      </BrowserRouter>
    )
  }
}
export default App
