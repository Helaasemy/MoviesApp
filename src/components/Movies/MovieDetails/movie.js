import React, { Component } from "react";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../../apiConfig";
import Spinner from "../spinner";
import { Input, Grid } from "semantic-ui-react";


class Movie extends Component {
  state = {
    movie: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const id = window.location.href.split("/").pop();
    console.log(id);

    const endpoint = `${API_URL}movie/${id}?api_key=${API_KEY}`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())

      .then(data => {
        this.setState({
          movie: data,
          loading: false
        });
      });
  };

  render() {
    console.log(this.state.movie);
    const movie = this.state.movie;

    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Grid textAlign="center" verticalAlign="middle"
            className="container-fluid bg_movie"
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(36, 36, 36, 0.3),rgba(36,36,36,0.6)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}
          >
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </Grid>
          <div className="container img_up">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="movie_image"
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-left text-white ">
                      {movie.original_title}
                    </h1>
                  </div>
                  <div className="col-md-5">
                    <span className="badge badge-warning ">
                      IMDB : {movie.vote_average}
                    </span>
                  </div>
                  <div className="col-md-8 pt-4">
                    <p className="text-left text-white text-uppercase">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Movie;
