import React from "react";
import "./Cart.css";
import Subtotal from "../../components/subtotal/Subtotal";
import { useStateValue } from "../../data/StateProvider";
import CartProduct from "../../components/cartProduct/CartProduct";

function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, Handry</h3>
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

      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
