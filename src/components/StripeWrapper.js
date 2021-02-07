import React from "react";

import Checkout from "../pages/checkout/Checkout";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripeKey } from "../util/config";

const promise = loadStripe(stripeKey);
const StripeWrapper = () => (
  <Elements stripe={promise}>
    <Checkout />
  </Elements>
);

export default StripeWrapper;
