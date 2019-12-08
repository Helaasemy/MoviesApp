import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Movies/home";
import Movie from "./components/Movies/MovieDetails/movie";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:id" component={Movie} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
