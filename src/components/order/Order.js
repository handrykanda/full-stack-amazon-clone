import React from "react";
import "./Order.css";
import moment from "moment";
import CartProduct from "../../components/cartProduct/CartProduct";
import CurrencyFormat from "react-currency-format";
import Grid from "@material-ui/core/Grid";

function Order({ order }) {
  return (
    <div className="order">
      <Grid container alignContent="center">
        <Grid item md={8} sm={8} xs={12}>
          <Grid container alignContent="center">
            <Grid item md={8} sm={8} xs={12}>
              <h2>Order</h2>
              <p>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
              </p>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <p>
                Order ID: <small>{order.id}</small>
              </p>
            </Grid>
          </Grid>
          {order.data.cart?.map((item) => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
        </Grid>
      </Grid>
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
