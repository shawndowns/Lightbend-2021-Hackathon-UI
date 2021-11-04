import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <Account>
        <header>
          <div class="container">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/signup">Signup</a></li>
                <Status />
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            Welcome!
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Account>
    </Router>
  );
};

export default App;