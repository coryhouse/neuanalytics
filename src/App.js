import React from "react";
import Nav from "./Nav";
import Users from "./Users";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";
import ManageUser from "./ManageUser";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user">
          <ManageUser />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
