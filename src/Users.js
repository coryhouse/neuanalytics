import React, { useState, useEffect } from "react";
import * as userApi from "./api/userApi";
import { useHistory } from "react-router-dom";

function Users() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.getUsers().then(usersResp => {
      setUsers(usersResp.data);
    });
  }, []);

  function deleteUser(id) {
    userApi.deleteUser(id).then(() => {
      // Alternatively, we could getUsers and then store that in state.
      // But to avoid an extra HTTP call, we'll just remove the deleted
      // record from state.
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers);
    });
  }

  return (
    <>
      <h1>Users</h1>
      <button onClick={() => history.push("/user")}>Add User</button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <button
                  aria-label={`Delete ${user.name} with ID of ${user.id}`}
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
