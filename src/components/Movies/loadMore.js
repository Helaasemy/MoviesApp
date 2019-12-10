import React from "react";

const LoadMore = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn  btn-primary text-center"
              onClick={props.LoadMore_parent}
            >
              Loading more{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadMore;
