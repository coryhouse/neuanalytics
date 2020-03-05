import React from "react";

function Users() {
  const users = [
    { id: 1, name: "Cory", role: "Admin" },
    { id: 2, name: "Dave", role: "Quitter" }
  ];

  return (
    <>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
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
