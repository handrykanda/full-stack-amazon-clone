import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
