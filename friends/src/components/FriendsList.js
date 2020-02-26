import React, { Component } from "react";
import "./FriendsList.css";
import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendsList extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("test", res.data);
        this.setState({
          ...this.state,
          friends: res.data
        });
        // console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="tc pa3 pa5-ns">
        {this.state.friends.map(friend => (
          <article className="hide-child relative ba b--black-20 mw5 center">
            <img
              src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-add-user-icon-png-image_762930.jpg"
              className="db"
              alt="avatar"
            />
            <div className="pa2 bt b--black-20">
              <a className="f6 db link dark-blue hover-blue" href="./">
                <span
                  style={{
                    fontWeight: "bolder",
                    textShadow: "1px 1px 1px blue"
                  }}
                >
                  name:
                </span>{" "}
                {friend.name}
              </a>
              <p className="f6 gray mv1">
                <span
                  style={{
                    fontWeight: "bolder",
                    textShadow: "1px 1px 1px blue"
                  }}
                >
                  age:
                </span>{" "}
                {friend.age}
              </p>
              <p className="f6 gray mv1">
                <span
                  style={{
                    fontWeight: "bolder",
                    textShadow: "1px 1px 1px blue"
                  }}
                >
                  email:
                </span>{" "}
                {friend.email}
              </p>
              <a
                className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1"
                href="./"
              >
                Add Friend
              </a>
            </div>
          </article>
        ))}
      </section>
    );
  }
}

export default FriendsList;
