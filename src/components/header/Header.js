import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../../data/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="Header">
      <Link to="/">
        <div className="Header-logo">
          <img
            src={
              "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            }
          />
        </div>
      </Link>
      {/* Address */}
      <div className="Header-optionAddress">
        {/* icon */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello,</span>
          <span className="Header-optionLineTwo">Select your address</span>
        </div>
      </div>
      {/* Search */}
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Header-navItems">
        {/* Login name */}

        <Link to="/login">
          <div className="Header-option">
            <span className="Header-optionLineOne">Hi</span>
            <span className="Header-optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* Orders */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">& Orders</span>
        </div>
        {/* Cart */}
        <Link to="/cart">
          <div className="Header-optionCart">
            <ShoppingBasketIcon />
            <span className="Header-cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
