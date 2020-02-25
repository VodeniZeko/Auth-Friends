import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//
import { Nav } from "./components/Nav";
import Login from "./components/Login";
import { FriendsList } from "./components/FriendsList";
function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
