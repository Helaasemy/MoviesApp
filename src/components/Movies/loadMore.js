import React from "react";
import { Button, Grid } from "semantic-ui-react";


const LoadMore = props => {
  return (
    <React.Fragment>
     
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Button
            content="LOAD MORE MOVIES"
            secondary
            onClick={props.LoadMore_parent}
          />
        </Grid.Column>
 
    </React.Fragment>
  );
};

export default LoadMore;
