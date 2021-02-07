import React from "react";
import "./Cart.css";
import Subtotal from "../../components/subtotal/Subtotal";
import { useStateValue } from "../../data/StateProvider";
import CartProduct from "../../components/cartProduct/CartProduct";
import Grid from "@material-ui/core/Grid";

function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <Grid container spacing={1} alignContent="center">
        <Grid item md={8} sm={8} xs={12}>
          <div className="cart__left">
            <img
              className="cart__ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
            />

            <div>
              <h3>Hello, {!user ? "Guest" : user.email}</h3>
              <h2 className="cart__title">Your shopping Cart</h2>

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
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <div className="cart__right">
            <Subtotal />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
