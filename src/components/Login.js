import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { login } from '../actions';
// import {Link} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  LoginContainer,
  LoginForm,
  LoginInfoContainer,
  LoginInfo,
  Label,
  Input,

  LoginButton,
  SignUpContainer,
  SignUpButton,
  HTwo,
  HThree,


} from '../styled/LoginStyles';


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state.credentials;

    if (username && password) {

      this.props
        .login(this.state.credentials) //credentials returned
        // history updated
        .then(() => this.props.history.push("/protected"));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("username");
    }

  };

  render() {
    return (
      <LoginContainer>

        <HTwo>Access Use My Tech Stuff !</HTwo>

        <LoginForm  onSubmit={this.handleLogin}>

          <LoginInfoContainer>

            <LoginInfo>
              <Label>Account</Label>
              <Input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </LoginInfo>

            <LoginInfo>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="********"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </LoginInfo>

            <LoginButton>
              {this.props.isLoggingIn ?
                <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" />
                :
                "Log in"
              }
            </LoginButton>

          </LoginInfoContainer>

          <SignUpContainer>
            <HThree>New to Use My Tech Stuff ?</HThree>
            <SignUpButton
              onClick = { () => this.props.history.push("/signupform") }
            >  Sign Up !!! </SignUpButton>
          </SignUpContainer>


        </LoginForm>

      </LoginContainer>
    );
  }
}

/*
const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    username: state.credentials.username,

  };
};
*/


const mapStateToProps = ({ isLoggingIn, username }) => ({
  isLoggingIn,
  username,

});



export default connect(
  mapStateToProps,
  { login }
)(Login);
