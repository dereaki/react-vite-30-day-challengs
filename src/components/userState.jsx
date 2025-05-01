import React from "react";

const UserState = (props) => {
  if (props.loggedIn || props.isAdmin) {
    return <h1>wellcome is Admin</h1>;
  } else {
    return <h1>wellcome user</h1>;
  }
};

export default UserState;
