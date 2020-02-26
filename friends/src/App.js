import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
//
import Nav from "./components/Nav";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={FriendsList} />

        <Route path="/addFriend" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
