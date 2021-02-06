import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Routes from "./components/Routes";
import { withRouter } from "react-router-dom";
import { useStateValue } from "./data/StateProvider";
import { auth } from "./util/firebase";

const App = ({ location }) => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes />
    </>
  );
};

export default withRouter(App);
