import React from "react";
import "./CartProduct.css";
import { useStateValue } from "../../data/StateProvider";

function CartProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="CartProduct">
      <img className="CartProduct__image" src={image} />

      <div className="CartProduct__info">
        <p className="CartProduct__title">{title}</p>
        <p className="CartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
