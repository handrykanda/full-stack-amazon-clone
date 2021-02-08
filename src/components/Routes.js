import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Orders from "../pages/orders/Orders";
import Checkout from "./StripeWrapper";
import AuthRoute from "../util/AuthRoute";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripeKey } from "../util/config";
import { useStateValue } from "../data/StateProvider";

const promise = loadStripe(stripeKey);
const Routes = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <AuthRoute
          exact
          path="/checkout"
          authenticated={user !== null}
          component={Checkout}
        />
        <AuthRoute
          exact
          path="/orders"
          authenticated={user !== null}
          component={Orders}
        />
      </Switch>
    </main>
  );
};

export default Routes;
