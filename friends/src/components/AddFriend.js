import React, { Component } from "react";
import "./Login.css";
import { axiosWithAuth } from "../util/axiosWithAuth";

class AddFriend extends Component {
  state = {
    newFriend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(res => {
        this.props.history.push("./protected");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    //reset the form inputs
    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <main className="pa4 black-80">
        <form onSubmit={this.handleLogin} className="measure center">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>

          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="text">
              name
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="text">
              age
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="age"
                id="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email">
              email
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email"
                id="email"
                value={this.state.newFriend.email}
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
              value="Add a friend"
            />
          </div>
        </form>
      </main>
    );
  }
}

export default AddFriend;
