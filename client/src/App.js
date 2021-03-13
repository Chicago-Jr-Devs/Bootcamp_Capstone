import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import react pages 
import Consent from "./pages/Consent";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
//Import style sheet 
import './App.css';

// ReactDOM.render(<App />, document.getElementById("root"));

export default function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/consent">
            <Consent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}