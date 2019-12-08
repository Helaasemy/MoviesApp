import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import logo from "../logo.svg";

class Header extends Component {
  state = {
    genres: []
  };

  componentDidMount() {
    setTimeout(() => this.setState({ genres: getGenres() }), 500);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg  bg-dark">
          <img src={logo} width="50" height="50" alt="" />

          <ul className="nav justify-content-end leftt">
            <li className="nav-item text-white px-3">Comedy</li>
       
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
