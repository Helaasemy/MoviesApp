import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    setTimeout(() => this.setState({ movies: getMovies() }), 2000);
  };
  // filter handler
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <div>
        {this.state.movies.length === 0 && <h3>Loading ...</h3>}
        <div className="text-center">
        <h1 className="text-center">Movies</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movies => (
              <tr key={movies._id}>
                <td>{movies.title}</td>
                <td>{movies.genre.name}</td>
                <td>{movies.numberInStock}</td>
                <td>{movies.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movies)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Movies;
