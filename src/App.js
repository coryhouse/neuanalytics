import React from "react";
import Nav from "./Nav";
import Users from "./Users";
import Home from "./Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </>
  );
}

export default App;
