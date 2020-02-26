import React, { Component } from "react";
import "./Login.css";
import { axiosWithAuth } from "../util/axiosWithAuth";

class Login extends Component {
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
    axiosWithAuth()
      //make a post call and send the credentials
      .post("/api/login", this.state.credentials)
      .then(res => {
        //set the token received from server to local storage
        window.localStorage.setItem("token", res.data.payload);
        //send the user to friends page YAY
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
    //reset the form inputs
    this.setState({
      credentials: {
        username: "",
        password: ""
      }
    });
  };
  render() {
    return (
      <main className="pa4 black-80">
        <form onSubmit={this.handleLogin} className="measure center">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>

          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Username
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="username"
                id="email-address"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <label className="pa0 ma0 lh-copy f6 pointer">
            <input type="checkbox" /> Remember me
          </label>

          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </main>
    );
  }
}

export default Login;
