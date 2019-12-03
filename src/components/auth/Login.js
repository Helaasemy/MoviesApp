import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="orange" textAlign="center">
              <Icon name="puzzle piece" color="orange" />
              Login
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={this.handleChange}
                  type="text"
                />
                
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.handleChange}
                  type="password"
                />
              
                <Button color="orange" fluid size="large">
                  Submit
                </Button>
              </Segment>
            </Form>
            <Message>
             New user? <Link to="/register">Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Login;