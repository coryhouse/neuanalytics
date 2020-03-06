import React, { useState } from "react";
import * as userApi from "./api/userApi";
import { useHistory } from "react-router-dom";

const ManageUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    id: "",
    name: "",
    role: ""
  });

  function onChange({ target }) {
    // Using computed property syntax to reference a property via a variable.
    setUser({ ...user, [target.id]: target.value });
  }

  function addUser(event) {
    event.preventDefault(); // don't post back.
    userApi.addUser(user).then(() => {
      // redirect to /users
      history.push("/users");
    });
  }

  return (
    <form onSubmit={addUser}>
      <h1>Add User</h1>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input id="name" type="text" value={user.name} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <br />
        <input id="role" type="text" value={user.role} onChange={onChange} />
      </div>
      <input type="submit" value="Add User" />
    </form>
  );
};

export default ManageUser;
