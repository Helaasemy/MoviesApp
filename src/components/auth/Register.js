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
import firebase from "../../firebase";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
  };

  formValid = () => {
    let errors = [];
    let error;

    if (this.formEmpty(this.state)) {
      error = { message:  'Fill all  the fields' };
      this.setState({ errors: error.concat(error) });
      return false;
    } else if (!this.passwordValidation(this.state)) {
      error = { message:  'Password Is  Invalid' };
      this.setState({ errors: error.concat(error) });
      return false;
    } else {
      return true;
    }
  };


  formEmpty = ({ username, email, password, passwordConfirmation }) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length
  };

  passwordValid = ({ password,  passwordConfirmation }) => {
   if (password.length < 6   ||  passwordConfirmation.length < 6  ) {

     return false;
   } else if  ( password != passwordConfirmation) {
      return false;
   } else {
     return true;
   }

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    if (this.formValid()) {
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
        });
    }
  };
  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <React.Fragment>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Register to Chat
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
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
                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                  type="password"
                />
                <Button color="orange" fluid size="large">
                  Submit
                </Button>
              </Segment>
            </Form>
            <Message>
              Already a user? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Register;
