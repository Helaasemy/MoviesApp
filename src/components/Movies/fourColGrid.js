import React from "react";
import { Link } from "react-router-dom";
import "./fourColGrid.css";
import { Icon } from "semantic-ui-react";

const FourColGrid = props => {
  return (
    <React.Fragment>
      <div className="row">
        {props.dataFromParent.map(movies => (
          <Link
            key={movies.id}
            className="movie1 card "
            to={{
              pathname: `/${movies.id}`,
              movieName: `${movies.title}`
            }}
          >
            <div
              className="wrapper"
              style={{
                background: `url('https://image.tmdb.org/t/p/original/${movies.poster_path}') center/cover no-repeat`
              }}
            >
              <div className="header">
                <div className="date">
                  <span className="day">{movies.release_date}</span>
                </div>
                <ul className="menu-content">
                  <li>
                    <Icon name="sort amount up" />
                    <span>{movies.vote_average}</span>
                  </li>
                  <li>
                    <Icon name="heart" />
                    <span>{movies.vote_count}</span>
                  </li>
                </ul>
              </div>
              <div className="data">
                <div className="content">
                  {/* <span className="author"></span> */}
                  <h1 className="title">
                    <a>{movies.title}</a>
                  </h1>
                  <p className="text">{movies.overview}</p>
                  <Link
                    className="button"
                    to={{
                      pathname: `/${movies.id}`,
                      movieName: `${movies.title}`
                    }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          {props.dataFromParent.map(movies => (
            <div key={movies.id} className="card mb-3 movie_width">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <Link
                    to={{
                      pathname: `/${movies.id}`,
                      movieName: `${movies.title}`
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                      style={{
                        ba
                      }}
                      className="card-img"
                      alt={movies.title}
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div>
                      <span className="badge badge-warning ">
                        IMDB : {movies.vote_average}
                      </span>
                      <h5 className="card-title">{movies.title}</h5>
                    </div>
                    <small className="text-muted">{movies.release_date}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default FourColGrid;
