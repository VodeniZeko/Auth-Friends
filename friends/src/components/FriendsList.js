import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

export const FriendsList = () => {
  const [friends, setFriends] = useState();

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/api/friends")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  return <div>hi</div>;
};
