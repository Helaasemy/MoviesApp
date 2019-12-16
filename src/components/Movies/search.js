import React, { Component } from "react";
import { Input, Grid } from "semantic-ui-react";
//import { FaFilter } from "react-icons/fa";

class Search extends Component {
  state = {
    value: ""
  };

  doSearching = event => {
    //  if (event.target.value === "") return
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);
    setTimeout(() => {
      this.props.callback(this.state.value);
    }, 3000);
  };
  render() {
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column >
            <Input
              value={this.state.value}
              onChange={this.doSearching}
              icon="search"
              placeholder="Search..."
              style={{ minWidth: 360 }}
            />
          </Grid.Column>
        </Grid>
       
      </React.Fragment>
    );
  }
}

export default Search;
