import React, { useState, useEffect } from "react";
import * as userApi from "./api/userApi";
import { useHistory, useRouteMatch } from "react-router-dom";
import Input from "./shared/Input";

// Pulling outside of component since this never changes.
const emptyUser = {
  id: "",
  name: "",
  role: ""
};

const ManageUser = ({ users, setUsers }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { id: userIdToEdit } = match.params;
  const inEditMode = Boolean(userIdToEdit);
  const [user, setUser] = useState(emptyUser);

  useEffect(() => {
    function getInitialUser(users) {
      if (userIdToEdit) {
        const userToEdit = users.find(
          user => user.id === parseInt(userIdToEdit)
        );
        setUser(userToEdit);
      }
    }

    async function initUser() {
      // if users aren't passed in, load 'em.
      if (users.length === 0) {
        const usersResp = await userApi.getUsers();
        setUsers(usersResp.data);
        getInitialUser(usersResp.data);
      } else {
        getInitialUser(users);
      }
    }

    initUser();
  }, [setUsers, userIdToEdit, users]);

  function onChange({ target }) {
    // Using computed property syntax to reference a property via a variable.
    setUser({ ...user, [target.id]: target.value });
  }

  function addUser(event) {
    event.preventDefault(); // don't post back.
    userApi.addUser(user).then(response => {
      setUsers([...users, response.data]);
      // redirect to /users
      history.push("/users");
    });
  }

  return (
    <form onSubmit={addUser}>
      <h1>{inEditMode ? "Edit" : "Add"} User</h1>
      <Input id="name" label="Name" value={user.name} onChange={onChange} />
      <Input id="role" label="Role" value={user.role} onChange={onChange} />
      <input type="submit" value={inEditMode ? "Save User" : "Add User"} />
    </form>
  );
};

export default ManageUser;
