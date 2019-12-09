import React from "react";
import { Link } from "react-router-dom";

const FourColGrid = props => {
  return (
    <React.Fragment>
      <div className="container-fluid">
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
      </div>
    </React.Fragment>
  );
};

export default FourColGrid;
