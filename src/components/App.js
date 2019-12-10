import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Movies/home";

class App extends Component {
  render() {
    return (
     
        <React.Fragment>
         <Home />
        </React.Fragment>
     
    );
  }
}

export default App;
