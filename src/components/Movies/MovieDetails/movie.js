import React, { Component } from "react";

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../../apiConfig";
import Spinner from "../spinner";
import { Image, Grid, Label } from "semantic-ui-react";
import "./movie.css";

class Movie extends Component {
  state = {
    movie: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const id = window.location.href.split("/").pop();
    console.log(id);

    const endpoint = `${API_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`;
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
          <Grid
            textAlign="center"
            verticalAlign="middle"
            className="bg_movie"
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(36, 36, 36, 0.3),rgba(36,36,36,0.6)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}
          >
            <Grid className="movie_cont">
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={3}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h1 className="mv_white">{movie.original_title}</h1>
                  <p className="mv_white">{movie.release_date}</p>
                  <Label color="yellow">IMDB : {movie.vote_average}</Label>
                  <p className="mv_white">{movie.overview}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
  }
}

export default Movie;
