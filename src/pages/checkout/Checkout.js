import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useStateValue } from "../../data/StateProvider";
import CartProduct from "../../components/cartProduct/CartProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../data/reducer";
import axios from "../../util/axios";
import { db } from "../../util/firebase";
import { red } from "@material-ui/core/colors";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="Checkout">
      <div className="Checkout__container">
        <h1>
          Checkout (<Link to="/cart">{cart?.length} items</Link>)
        </h1>

        {/* Checkout section - delivery address */}
        <div className="Checkout__section">
          <div className="Checkout__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="Checkout__address">
            <p>{user?.email}</p>
            <p>123 React Rd</p>
            <p>Harare, Zimbabwe</p>
          </div>
        </div>

        {/* Checkout section - Review Items */}
        <div className="Checkout__section">
          <div className="Checkout__title">
            <h3>Review items</h3>
          </div>
          <div className="Checkout__items">
            {cart.map((item) => (
              <CartProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* Checkout section - Checkout method */}
        <div className="Checkout__section">
          <div className="Checkout__title">
            <h3>Payment Method</h3>
          </div>
          <div className="Checkout__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <div style={{ padding: 20 }}>
                <CardElement onChange={handleChange} />
                {/* Errors */}
                {error && (
                  <p style={{ color: "red", paddingTop: 10 }}>{error}</p>
                )}
              </div>

              <div className="Checkout__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
