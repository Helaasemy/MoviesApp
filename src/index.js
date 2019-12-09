import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import firebase from "./firebase";
import Movie from "./components/Movies/MovieDetails/movie";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/:id" component={Movie} exact />
      </Switch>
    );
  }
}

const RootwithAuth = withRouter(Root);

ReactDOM.render(
  <Router>
    <RootwithAuth />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
