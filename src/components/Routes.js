import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </main>
);

export default Routes;

{
  /* <Route path="/login" component={Login}>
          { sessionStorage.getItem('state') ? <Redirect to="/" /> : undefined }
          </Route> */
}
