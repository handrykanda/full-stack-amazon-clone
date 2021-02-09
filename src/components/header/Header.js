import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../../data/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from "../../util/firebase";
import { slide as Menu } from "react-burger-menu";
import useScreenSize from "use-screen-size";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "20px",
    left: "10px",
    top: "12px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0px",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    paddingBottom: "20px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.85)",
    top: "0px",
  },
};

function Header() {
  const size = useScreenSize();
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="Header">
      <div className="Header-menu">
        <Menu left width="40%" styles={styles} disableAutoFocus>
          <Link className="Header-menu-bar" to={!user && "/login"}>
            {user ? `Hello, ${user.email}` : "Hello, Sign In"}
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            Home
          </Link>
          <Link style={{ color: "#000000" }} to="/cart">
            Cart
          </Link>
          <Link style={{ color: "#000000" }} to="/orders">
            Returns & Orders
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            Select your address
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <h3>Shop By Department</h3>
            <hr style={{ color: "#F7F7F7" }} />
          </Link>

          <Link style={{ color: "#000000" }} to="/">
            <p>Electronics</p>
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <p>Computers</p>
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <p>Smart Home</p>
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <h3>Help & Settings</h3>
            <hr style={{ color: "#F7F7F7" }} />
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <p>Your Account</p>
          </Link>
          <Link style={{ color: "#000000" }} to="/">
            <p>Help</p>
          </Link>
          <Link
            style={{ color: "#000000" }}
            onClick={handleAuthentication}
            to={!user && "/login"}
          >
            {user ? "Sign Out" : "Sign In"}
          </Link>
        </Menu>
      </div>
      <Link to="/">
        <div className="Header-logo">
          <img
            src={
              "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            }
          />
        </div>
      </Link>
      {size.width >= 992 && (
        <div className="Header-optionAddress">
          <div className="Header-option">
            <span className="Header-optionLineOne">Hello </span>
            <Link to="/">
              <span className="Header-optionLineTwo">Select your address</span>
            </Link>
          </div>
        </div>
      )}
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>

      <div className="Header-navItems">
        {size.width >= 992 && (
          <>
            <Link to={!user && "/login"}>
              <div className="Header-option" onClick={handleAuthentication}>
                <span className="Header-optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="Header-optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <Link to="/orders">
              <div className="Header-option">
                <span className="Header-optionLineOne">Returns</span>
                <span className="Header-optionLineTwo">& Orders</span>
              </div>
            </Link>
          </>
        )}
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
