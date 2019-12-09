import React, { Component } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../apiConfig";
// import Header from "./header";
import Search from "./search";
import FourColGrid from "./fourColGrid";
import Spinner from "./spinner";
import LoadMore from "./loadMore";
  
class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ""
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }
  // Searching  for  movies
  searching = searchTerm => {
    console.log(searchTerm);
    let endpoint = "";
    this.setState({
      movies: [],
      loading: false,
      searchTerm: ""
    });
    console.log("word: ", searchTerm);
    if (searchTerm.trim() === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  };
  // Search  for  movies  ----  END

  // Loading  more  movies
  LoadMore = () => {
    let endpoint = "";
    this.setState({ loading: true });

    if (this.state.searchTerm === "0") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&query${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };
  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.totalPages
        });
      });
  };

  // filter handler
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies });
  };

  render() {
    console.log(this.state.movies);
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          {/* <Header /> */}
          <Search callback={this.searching} />
          <FourColGrid dataFromParent={this.state.movies} />
          <LoadMore LoadMore_parent={this.LoadMore} />
        </React.Fragment>
      );
    }
  }
}

export default Home;
