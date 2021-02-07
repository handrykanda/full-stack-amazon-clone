import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Checkout from "./StripeWrapper";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripeKey } from "../util/config";

const promise = loadStripe(stripeKey);
const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  </main>
);

export default Routes;

{
  /* <Route path="/login" component={Login}>
          { sessionStorage.getItem('state') ? <Redirect to="/" /> : undefined }
          </Route> */
}
