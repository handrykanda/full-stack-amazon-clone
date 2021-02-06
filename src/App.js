import Header from "./components/header/Header";
import Routes from "./components/Routes";
import { withRouter } from "react-router-dom";

const App = ({ location }) => {
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes />
    </>
  );
};

export default withRouter(App);
