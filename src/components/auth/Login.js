import React from "react";
import md5 from "md5";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import { database } from "../../firebase";


class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  displayingErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.formValid()) {
      this.setState({ errors: [], loading: true });

      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInuser => {
          console.log(signedInuser);
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };

  formValid = ({ email, password }) => email && password;

  render() {
    const { errors, loading } = this.state;
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Login to Chat
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  type="email"
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

                <Button
                  disabled={loading}
                  className={loading ? "loading" : ""}
                  secondary
                  fluid
                  size="large"
                >
                  Submit
                </Button>
              </Segment>
            </Form>
            {errors.length > 0 && (
              <Message error>
                <h3>error</h3>
                {this.displayingErrors(errors)}
              </Message>
            )}
            <Message>
              Already a user? <Link to="/register">register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Login;
