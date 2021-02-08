import React from "react";
import "./CartProduct.css";
import { useStateValue } from "../../data/StateProvider";
import Grid from "@material-ui/core/Grid";

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
      <Grid container alignContent="center" alignItems="center">
        <Grid item md={5} sm={5} xs={12}>
          <img className="CartProduct__image" src={image} />
        </Grid>
        <Grid item md={7} sm={7} xs={12}>
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
                  <p key={i}>🌟</p>
                ))}
            </div>
            {!hideButton && (
              <button onClick={removeFromCart}>Remove from Cart</button>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartProduct;
